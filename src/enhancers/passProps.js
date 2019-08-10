import React from 'react';

const passProps = props => WrappedComponent => {
  const PassProps = () => <WrappedComponent {...props} />;
  return PassProps;
};
export default passProps;
