import React, { FC, useState } from 'react';
import Button from '../Button/Button';
import { getLogger } from '../logger';

const FunctionalApp :FC = () => {
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
    </>
  );
};

export default FunctionalApp;
