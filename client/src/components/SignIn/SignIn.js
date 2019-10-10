// @flow
import React, { Component } from 'react';
import s from './SignIn.module.css';
import type { StateSignIn, PropsSignIn } from '../../types/components';

const INITIAL_STATE = {
  email: '',
  password: '',
};

class SignIn extends Component<PropsSignIn, StateSignIn> {
  state = { ...INITIAL_STATE };

  handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { signIn } = this.props;

    signIn(this.state);

    this.handleReset();
  };

  handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  handleReset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { email, password } = this.state;

    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={this.handleChange}
          placeholder="Email"
        />
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
          placeholder="Password"
        />
        <br />
        <button type="submit"> Sign In</button>
      </form>
    );
  }
}

export default SignIn;
