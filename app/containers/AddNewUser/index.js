import React, { useState } from 'react';

export default function SignUp(props) {
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
    <div className="SignUp">
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
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Enter Password Again"
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
