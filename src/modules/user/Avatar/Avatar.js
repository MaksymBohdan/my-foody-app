import React from 'react';
import s from '../../header/AppHeader.module.css';

const Avatar = ({ image = '', width = 60, height = 60 }) => {
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
