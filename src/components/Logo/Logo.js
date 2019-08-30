// @flow
import React from 'react';
import type { PropsLogo } from '../../configs/flowTypes/components';

const Logo = ({ image = '', width = 60, height = 60 }: PropsLogo) => {
  return <img src={image} alt="logo" width={width} height={height} />;
};

export default Logo;
