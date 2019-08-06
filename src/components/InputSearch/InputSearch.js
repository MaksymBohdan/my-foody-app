import React from 'react';

const InputSearch = ({ onChange, value }) => {
  return <input type="text" onChange={onChange} value={value} />;
};

export default InputSearch;
