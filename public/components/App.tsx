import React, { createRef } from 'react';
import classNames from 'classnames';
import FunctionalApp from './FunctionalApp/FunctionalApp';
import ClassApp from './ClassApp/ClassApp';
import { createInstance } from './logger';
import { AppProps, AppState, RenderType } from './types';

class App extends React.PureComponent<AppProps, AppState> {
  public readonly logEle: React.RefObject<HTMLDivElement>;

  constructor(props: Record<string, never>) {
    super(props);

    this.state = {
      selectedRenderType: RenderType.Functional,
    };

    this.logEle = createRef();

    createInstance(this);
  }

  private setRenderType = (renderType: RenderType) => {
    this.setState({
      selectedRenderType: renderType,
    });
  };

  private clearLogEle = () => {
    if (this.logEle.current) {
      this.logEle.current.innerHTML = '';
    }
  };

  render() {
    const { selectedRenderType } = this.state;
    return (
      <div className="container font-mono mx-auto">
        <div className="px-12 my-6">
          <h3 className="text-2xl mb-6">Component Type</h3>
          <p>
            <label>
              <input
                name="comp-type"
                type="radio"
                className="m-2"
                checked={selectedRenderType === RenderType.Functional}
                onClick={() => {
                  this.setRenderType(RenderType.Functional);
                }}
              />
              Functional Component
            </label>
          </p>
          <p className="mt-0.5">
            <label>
              <input
                name="comp-type"
                type="radio"
                className="m-2"
                checked={selectedRenderType === RenderType.Class}
                onClick={() => {
                  this.setRenderType(RenderType.Class);
                }}
              />
              Class Component
            </label>
          </p>
        </div>
        <div className="flex justify-center px-6 my-6 lg:flex-row md:flex-col">
          <div className={classNames('w-full lg:w-1/2 md:w-full  text-center p-6 rounded-xl mx-6 h-60 md:my-4', {
            'bg-green-200': selectedRenderType === RenderType.Class,
            'bg-pink-200': selectedRenderType === RenderType.Functional,
          })}
          >
            {
              selectedRenderType === RenderType.Functional ? <FunctionalApp /> : <ClassApp />
            }

          </div>
          <div className="w-full lg:w-1/2 md:w-full mx-6 bg-gray-100 p-6 rounded-xl h-60 md:my-4 flex flex-col">
            <div className="flex flex-row">
              <h1 className="flex-grow">Component render log</h1>
              <span
                className="hover:bg-gray-200 rounded-full p-1"
                onClick={this.clearLogEle}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
            </div>
            <div className="border-t m-2" />
            <div className="h-full overflow-auto" ref={this.logEle} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
