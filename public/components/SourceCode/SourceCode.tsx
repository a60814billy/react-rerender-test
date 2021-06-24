import React, { FC, memo } from 'react';
import PropTypes from 'prop-types';
import CodeIcon from './CodeIcon';

import style from './SourceCode.module.scss';

interface SourceCodeProp {
  link: string
}

const SourceCode: FC<SourceCodeProp> = ({ link }) => (
  <a href={link} target="_blank" className={style.sourceCode2} rel="noreferrer">
    Source Code
    {' '}
    <CodeIcon />
  </a>
);

SourceCode.propTypes = {
  link: PropTypes.string.isRequired,
};

export default memo(SourceCode);
