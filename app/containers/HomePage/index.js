/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';

import Login from 'components/Main/Login';
import PropTypes from 'prop-types';

export default function HomePage(props) {
  const { history } = props;
  return (
    <>
      <Login />
      <button type="submit" onClick={() => history.push('/AddNewUser')}>
        Sign Up
      </button>
    </>
  );
}

HomePage.contextTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};