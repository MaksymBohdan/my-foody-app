// @flow
import React from 'react';
import passProps from '../../components/ hoc/passProps';
import type { AccountViewProps } from '../../types/module/account';

const AccountView = ({ image, name, phone, mail }: AccountViewProps) => (
  <>
    <div>
      <img src={image} alt="accountImage" />
      <p>Name: {name}</p>
      <p>Phone: {phone}</p>
      <p>Mail: {mail}</p>
    </div>
    <div>
      <h1> Update section</h1>
      <button type="button">Update</button>
    </div>
  </>
);

export default passProps({
  img: 'some-img',
  name: 'some name',
  phone: 'some phone',
  mail: 'some@mail.com',
})(AccountView);
