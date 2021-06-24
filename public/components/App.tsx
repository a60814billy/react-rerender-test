import React, { createRef, lazy, Suspense } from 'react';
import classNames from 'classnames';
import { createInstance } from './logger';
import { AppProps, AppState, RenderType } from './types';

const FunctionalApp = lazy(() => import('./FunctionalApp/FunctionalApp'));
const ClassApp = lazy(() => import('./ClassApp/ClassApp'));

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
            <Suspense fallback={(
              <div>
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-rose-600 hover:bg-rose-500 focus:border-rose-700 active:bg-rose-700 transition ease-in-out duration-150 cursor-not-allowed"
                >
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Loading
                </button>
              </div>
)}
            >
              {
                selectedRenderType === RenderType.Functional
                  ? <FunctionalApp />
                  : <ClassApp />
               }
            </Suspense>
          </div>
          <div className="w-full lg:w-1/2 md:w-full mx-6 bg-gray-100 p-6 rounded-xl h-60 md:my-4 flex flex-col">
            <div className="flex flex-row">
              <h1 className="flex-grow">Component render log</h1>
              <span
                className="hover:bg-gray-200 rounded-full p-1 cursor-pointer"
                onClick={this.clearLogEle}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
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
