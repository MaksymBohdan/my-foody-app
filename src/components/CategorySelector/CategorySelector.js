// @flow
import React, { Fragment } from 'react';
import type { PropsCategorySelector } from '../../configs/flowTypes/components';

const CategorySelector = ({
  options,
  onChange,
  value,
}: PropsCategorySelector) => (
  <Fragment>
    <select onChange={event => onChange(event.target.value)} value={value}>
      {options.map(({ id, name }) => (
        <option key={id} value={name}>
          {name}
        </option>
      ))}
    </select>
  </Fragment>
);

export default CategorySelector;
