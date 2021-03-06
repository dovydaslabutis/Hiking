import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function AddNewUser(props) {
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
    <div className="AddNewUser">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter Email"
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
        <button
          disabled={!validateForm()}
          onClick={() => history.push('/')}
          type="submit"
        >
          SignUp
        </button>
      </form>
    </div>
  );
}

AddNewUser.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};
