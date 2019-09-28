import React from 'react';
import { connect } from 'react-redux';
import SignIn from '../components/others/authentication/SignIn';
import { authOperations } from '../state/auth';

const SignInPage = ({ signIn }) => {
  return <SignIn signIn={signIn} />;
};

const mapDispatchToProps = {
  signIn: authOperations.signIn,
};

export default connect(
  null,
  mapDispatchToProps,
)(SignInPage);
