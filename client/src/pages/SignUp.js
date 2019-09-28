import React from 'react';
import { connect } from 'react-redux';
import SignUp from '../components/others/authentication/SignUp';
import { authOperations } from '../state/auth';

const SignUnPage = ({ signUp }) => {
  return <SignUp signUp={signUp} />;
};

const MDTP = {
  signUp: authOperations.signUp,
};

export default connect(
  null,
  MDTP,
)(SignUnPage);
