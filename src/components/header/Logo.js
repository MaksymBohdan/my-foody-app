import React from 'react';
// import logo from '../../img/logo.png';
import s from './Logo.module.css';

const Logo = ({ image = '', width = 60, height = 60 }) => {
  return (
    <img
      src={image}
      className={s.logoStyle}
      alt="logo"
      width={width}
      height={height}
    />
  );
};

export default Logo;
