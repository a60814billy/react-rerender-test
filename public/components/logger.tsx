import moment from 'moment';
import React from 'react';
import { App } from './types';

class Logger {
  private ele: React.RefObject<HTMLDivElement>;

  constructor(app: App) {
    this.ele = app.logEle;
  }

  log(str: string): void {
    if (this.ele.current) {
      const curr = this.ele.current;
      curr.innerHTML = `<p><span>${moment().format('HH:mm:ss')}</span> ${str}</p> ${curr.innerHTML.toString()}`;
    }
  }
}

let instance: Logger | null = null;

export function getLogger(): Logger {
  return instance as Logger;
}

export function createInstance(app: App): void {
  instance = new Logger(app);
}
