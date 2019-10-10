// @flow
import React from 'react';
import s from '../../header/AppHeader.module.css';
import type { PropsLogo } from '../../../types/components/index';

const Avatar = ({ image = '', width = '60', height = '60' }: PropsLogo) => {
  return (
    <img
      className={s.Avatar}
      src={image}
      alt="logo"
      width={width}
      height={height}
    />
  );
};

export default Avatar;
