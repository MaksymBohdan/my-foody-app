import React from 'react';
import { connect } from 'react-redux';
import SignIn from '../components/SignIn/SignIn';
import { authOperations } from '../state/auth';
import withAuth from '../components/ hoc/withAuth';

const SignInPage = ({ signIn }) => <SignIn signIn={signIn} />;

const mapDispatchToProps = {
  signIn: authOperations.signIn,
};

export default withAuth(
  connect(
    null,
    mapDispatchToProps,
  )(SignInPage),
);
