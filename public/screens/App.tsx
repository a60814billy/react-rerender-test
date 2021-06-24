import React, { createRef, lazy, Suspense } from 'react';
import classNames from 'classnames';

import { createLoggerInstance } from '../logger';
import { AppProps, AppState, RenderType } from '../types';
import ComponentTypeSelectionSection from '../components/ComponentTypeSelectionSection';
import Loading from '../components/Loading';
import RenderLog from '../components/RenderLog';

import './App.scoped.scss';

const FunctionalApp = lazy(() => import('./FunctionalApp'));
const ClassApp = lazy(() => import('./ClassApp'));

class App extends React.PureComponent<AppProps, AppState> {
  public readonly loggerOutputElement: React.RefObject<HTMLDivElement>;

  constructor(props: Record<string, never>) {
    super(props);

    this.state = {
      selectedRenderType: RenderType.Functional,
    };

    this.loggerOutputElement = createRef();
    createLoggerInstance(this);
  }

  private setRenderType = (renderType: RenderType) => {
    this.setState({
      selectedRenderType: renderType,
    });
  };

  private clearLogEle = () => {
    if (this.loggerOutputElement.current) {
      this.loggerOutputElement.current.innerHTML = '';
    }
  };

  render(): JSX.Element {
    const { selectedRenderType } = this.state;
    return (
      <div className="app-container">
        <header className="px-12 mt-12">
          <h1 className="text-3xl">How to prevent functional component re-render called?</h1>
          <ComponentTypeSelectionSection
            selectedRenderType={selectedRenderType}
            onClick={(type: RenderType) => {
              this.setRenderType(type);
            }}
          />
        </header>
        <div className="section">
          <div className={classNames('card text-center', {
            'bg-green-200': selectedRenderType === RenderType.Class,
            'bg-pink-200': selectedRenderType === RenderType.Functional,
          })}
          >
            <Suspense fallback={<Loading />}>
              {
                selectedRenderType === RenderType.Functional
                  ? <FunctionalApp />
                  : <ClassApp />
              }
            </Suspense>
          </div>
          <div className="card bg-gray-100">
            <RenderLog onClick={this.clearLogEle} ref={this.loggerOutputElement} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
