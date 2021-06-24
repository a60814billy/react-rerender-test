import React, { FC } from 'react';
import PropTypes from 'prop-types';

interface CloseButtonProps {
  onClick: () => void
}

const CloseButton: FC<CloseButtonProps> = (props) => {
  const { onClick } = props;
  return (
    <button
      type="button"
      className="hover:bg-gray-200 rounded-full p-1 cursor-pointer"
      onClick={onClick}
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
    </button>
  );
};

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CloseButton;
