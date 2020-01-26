/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';

import PropTypes from 'prop-types';
// import Login from 'containers/Login';

export default function HomePage(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  const { history } = props;
  return (
    <>
      {/* <Login /> */}
      <div className="Login">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button
            disabled={!validateForm()}
            type="submit"
            onClick={() => history.push('/UserPage')}
          >
            Login
          </button>
        </form>
      </div>
      <button type="submit" onClick={() => history.push('/AddNewUser')}>
        Sign Up
      </button>
    </>
  );
}

HomePage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};
