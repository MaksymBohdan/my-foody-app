// @flow
import React from 'react';
import type { AbstractComponent } from 'react';

const passProps = (props: any) => (WrappedComponent: AbstractComponent<*>) => {
  const PassProps = () => <WrappedComponent {...props} />;
  return PassProps;
};
export default passProps;
