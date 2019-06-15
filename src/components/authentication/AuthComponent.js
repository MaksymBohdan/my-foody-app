import React, { Fragment } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

const AuthComponent = () => {
  return (
    <Fragment>
      <SignIn />
      <SignUp />
    </Fragment>
  );
};

export default AuthComponent;
