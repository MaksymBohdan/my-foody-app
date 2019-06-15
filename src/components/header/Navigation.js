import React from 'react';

const Navigation = ({ list = [] }) => {
  return (
    <ul>
      {list.map(el => (
        <li key={el}>
          <a href="/">{el}</a>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
