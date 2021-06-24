import React from 'react';
import Button from '../Button/Button';
import { getLogger } from '../logger';
import CodeIcon from '../CodeIcon/CodeIcon';
import SourceCode from '../SourceCode/SourceCode';

type ClassAppProps = Record<string, never>;

interface ClassAppState {
  counter: number
}

class ClassApp extends React.PureComponent<ClassAppProps, ClassAppState> {
  constructor(props: ClassAppProps) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

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
          <span>{counter}</span>
        </p>
        <Button
          text="Add"
          onClick={this.dispatchCounter}
        />
        <SourceCode link="https://github.com/a60814billy/react-rerender-test/blob/master/public/components/ClassApp/ClassApp.tsx" />
      </>
    );
  }
}

export default ClassApp;
