// @flow
import React from 'react';
import type { PropsLogo } from '../../configs/flowTypes/components';

const Logo = ({ image = '', width = '200', height = '260' }: PropsLogo) => {
  return <img src={image} alt="logo" width={width} height={height} />;
};

export default Logo;
