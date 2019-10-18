// @flow

import React from 'react';
import { connect } from 'react-redux';
import SignUp from '../../components/SignUp/SignUp';
import { authOperations } from '../../state/auth';
import withAuth from '../../components/ Hoc/withAuth';

const SignUnPage = ({ signUp }) => {
  return <SignUp signUp={signUp} />;
};

const MDTP = {
  signUp: authOperations.signUp,
};

export default withAuth(
  connect(
    null,
    MDTP,
  )(SignUnPage),
);
