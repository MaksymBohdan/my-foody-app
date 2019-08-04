import React, { Fragment } from 'react';

const CategorySelector = ({ options, onChange, value }) => (
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
