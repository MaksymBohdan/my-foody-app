import React, { Component } from 'react';
import s from './SigningForms.module.css';

const INITIAL_STATE = {
  email: '',
  password: '',
};

class SignIn extends Component {
  state = { ...INITIAL_STATE };

  handleSubmit = e => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log(this.state);
    this.handleReset();
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
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
