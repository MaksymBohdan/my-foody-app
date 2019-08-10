import React from 'react';

const MenuCard = ({ name, image, price }) => (
  <div>
    <img src={image} alt={name} width={320} height={240} />
    <p>{name}</p>
    <p>{price}</p>
  </div>
);

export default MenuCard;
