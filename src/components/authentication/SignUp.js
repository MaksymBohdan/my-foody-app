import React, { Component } from 'react';
import s from './SigningForms.module.css';

const INITIAL_STATE = {
  name: '',
  email: '',
  phone: '',
  password: '',
};

class SignUp extends Component {
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
