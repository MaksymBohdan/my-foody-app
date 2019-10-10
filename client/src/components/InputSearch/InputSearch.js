// @flow
import React from 'react';
import type { PropsInputSearch } from '../../types/components';

const InputSearch = ({ onChange, value }: PropsInputSearch) => {
  return <input type="text" onChange={onChange} value={value} />;
};

export default InputSearch;
