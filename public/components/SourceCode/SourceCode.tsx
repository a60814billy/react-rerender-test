import React, { FC, memo } from 'react';
import PropTypes from 'prop-types';
import CodeIcon from '../CodeIcon/CodeIcon';

interface SourceCodeProp {
  link: string
}

const SourceCode: FC<SourceCodeProp> = ({ link }) => (
  <a href={link} target="_blank" className="mt-6 text-right block hover:text-gray-600" rel="noreferrer">
    Source Code
    {' '}
    <CodeIcon />
  </a>
);

SourceCode.propTypes = {
  link: PropTypes.string.isRequired,
};

export default memo(SourceCode);
