import React, { FC, useState } from 'react';
import Button from '../../components/Button';
import { getLogger } from '../../logger';
import SourceCode from '../../components/SourceCode/SourceCode';

const Index: FC = () => {
  const [counter, dispatchCounter] = useState(10);
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
        onClick={() => dispatchCounter(counter + 1)}
      />
      <p className="mt-6 text-right">
        <SourceCode
          link="https://github.com/a60814billy/react-rerender-test/blob/master/public/components/FunctionalApp/FunctionalApp.tsx"
        />
      </p>
    </>
  );
};

export default Index;
