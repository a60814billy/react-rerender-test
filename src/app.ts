import express, { Express } from 'express';
import {
  createLogger, format, Logger, transports,
} from 'winston';
import { Server } from 'http';
import morgan from 'morgan';

class Application {
  private readonly app: Express;

  private readonly port: number;

  private readonly logger: Logger;

  private server: Server | null = null;

  constructor(port: number) {
    this.app = express();
    this.port = port;
    this.logger = createLogger({
      level: 'debug',
      format: format.combine(
        format.colorize(),
        format.splat(),
        format.simple(),
      ),
      transports: [
        new transports.Console(),
      ],
    });

    this.setupRouter();
  }

  async start() {
    return new Promise((resolve) => {
      this.server = this.app.listen(this.port, () => {
        this.logger.info(`Server started on http://0.0.0.0:${this.port}/`);
        return resolve(null);
      });
    });
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.server?.close((err) => {
        if (err) return reject(err);
        return resolve();
      });
    });
  }

  private setupRouter() {
    const { logger } = this;
    this.app.use(morgan('dev', {
      stream: {
        write(str: string) {
          logger.http(str.trim());
        },
      },
    }));

    /* eslint-disable */
    const config = require('../webpack.dev.config');
    const compiler = require('webpack')(config);
    const webpackDevMiddleware = require('webpack-dev-middleware');
    this.app.use(webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath
    }));
    this.app.use(require('webpack-hot-middleware')(compiler, {
      path: '/__webpack_hmr',
      heartbeat: 10 * 1000,
    }));
    /* eslint-enable */
  }
}

async function main() {
  const application = new Application(3000);
  await application.start();

  process.on('SIGTERM', () => {
    void application.stop();
  });
  process.on('SIGINT', () => {
    void application.stop();
  });
}

if (module === require.main) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
