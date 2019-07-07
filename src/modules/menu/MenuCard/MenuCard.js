import React from 'react';

const MenuCard = ({ name, image, price, onDelete }) => (
  <div>
    <img src={image} alt={name} width={320} height={240} />
    <p>{name}</p>
    <p>{price}</p>
    <div>
      <button type="button" onClick={onDelete}>
        удалить
      </button>
    </div>
  </div>
);

export default MenuCard;
