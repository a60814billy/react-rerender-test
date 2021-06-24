import React, { FC, useState } from 'react';
import Button from '../Button/Button';
import { getLogger } from '../logger';
import CodeIcon from '../CodeIcon/CodeIcon';
import SourceCode from '../SourceCode/SourceCode';

const FunctionalApp: FC = () => {
  const [counter, dispatchCounter] = useState(10);
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
        onClick={() => {
          dispatchCounter(counter + 1);
        }}
      />
      <SourceCode
        link="https://github.com/a60814billy/react-rerender-test/blob/master/public/components/FunctionalApp/FunctionalApp.tsx"
      />
    </>
  );
};

export default FunctionalApp;
