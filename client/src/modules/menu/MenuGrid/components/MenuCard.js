// @flow
import React from 'react';
import type { Entity } from '../../../../types/state/state';

const MenuCard = ({ name, image, price }: Entity) => (
  <div>
    <img src={image} alt={name} width={320} height={240} />
    <p>{name}</p>
    <p>{price}</p>
  </div>
);

export default MenuCard;
