import React, { MouseEventHandler } from 'react';

import PropTypes from 'prop-types';
import { getLogger } from '../logger';

interface ButtonProps {
  text: string
  onClick: MouseEventHandler<HTMLButtonElement>
}

function Button(props: ButtonProps): React.ReactElement {
  const { text, onClick } = props;
  getLogger().log('render Button');
  return (
    <button
      className="px-4 py-2 font-bold bg-indigo-300 rounded-xl hover:bg-indigo-500 focus:outline-none focus:shadow-outline"
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default React.memo(Button);
