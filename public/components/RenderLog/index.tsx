import React from 'react';
import CloseButton from './CloseButtonCloseButton';

interface RenderLogProps {
  onClick: () => void,
}

const RenderLog = React.forwardRef<HTMLDivElement, RenderLogProps>(
  (props: RenderLogProps, ref) => {
    const { onClick } = props;
    return (
      <>
        <div className="h-full flex flex-col">
          <div className="flex flex-row">
            <h1 className="flex-grow">Component render log</h1>
            <CloseButton onClick={onClick} />
          </div>
          <div className="border-t m-2" />
          <div className="h-auto overflow-auto" ref={ref} />
        </div>
      </>
    );
  },
);

export default RenderLog;
