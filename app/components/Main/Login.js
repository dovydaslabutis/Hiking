import React, { useState } from 'react';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const updateEmail = event => {
    setEmail(event.target.value);
  };
  const updatePassword = event => {
    setPassword(event.target.value);
  };

  // function validateForm() {
  //   return email.length > 0 && password.length > 0;
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
  // }
  const { history } = props;
  return (
    <div className="Login">
      <form>
        {/* onSubmit={handleSubmit} */}
        <input
          type="email"
          value={email}
          // onChange={e => setEmail(e.target.value)}
          onChange={updateEmail}
        />
        <input
          type="password"
          value={password}
          // onChange={e => setPassword(e.target.value)}
          onChange={updatePassword}
        />
        <button
          // disabled={!validateForm()}
          type="submit"
          onClick={() => history.push('/UserPage')}
        >
          Login
        </button>
      </form>
    </div>
  );
}
