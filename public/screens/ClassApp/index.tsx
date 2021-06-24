import React from 'react';
import Button from '../../components/Button';
import { getLogger } from '../../logger';
import SourceCode from '../../components/SourceCode/SourceCode';

type ClassAppProps = Record<string, never>;

interface ClassAppState {
  counter: number
}

class Index extends React.PureComponent<ClassAppProps, ClassAppState> {
  state = {
    counter: 0,
  };

  private dispatchCounter = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  render(): JSX.Element {
    const { counter } = this.state;
    getLogger().log('render App');
    return (
      <>
        <h1 className="text-2xl">Simple Counter</h1>
        <p className="my-6">
          Counter:
          {' '}
          <span>{counter}</span>
        </p>
        <Button
          text="Add"
          onClick={this.dispatchCounter}
        />
        <p className="mt-6 text-right">
          <SourceCode
            link="https://github.com/a60814billy/react-rerender-test/blob/master/public/screens/ClassApp/index.tsx"
          />
        </p>
      </>
    );
  }
}

export default Index;
