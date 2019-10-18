// @flow
import React, { Component } from 'react';

import s from './SignUp.module.css';
import type { SignUpState, SignUpProps } from '../../types/components';

const INITIAL_STATE = {
  name: '',
  email: '',
  phone: '',
  password: '',
};

class SignUp extends Component<SignUpProps, SignUpState> {
  state = { ...INITIAL_STATE };

  handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { signUp } = this.props;

    signUp(this.state);

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
    const { name, email, phone, password } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={name}
          name="name"
          placeholder="Name"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          value={email}
          name="email"
          placeholder="Email"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          value={phone}
          name="phone"
          placeholder="Phone"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="password"
          value={password}
          name="password"
          placeholder="Password"
          onChange={this.handleChange}
        />
        <br />
        <button type="submit"> Sign Up</button>
      </form>
    );
  }
}

export default SignUp;
