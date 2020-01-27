/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import ListPage from 'containers/ListPage';
import MapPage from 'containers/MapPage';
import UserPage from 'containers/UserPage';
import AddNewUser from 'containers/AddNewUser';
// import Background from 'containers/Img/Image.jpg';
import GlobalStyle from '../../global-styles';
import './index.css';
// const sectionStyle = {
//   width: '100%',
//   height: '1000px',
//   backgroundImage: `url(${Background})`,
// };

export default function App() {
  return (
    <div className="bg">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/ListPage" component={ListPage} />
        <Route exact path="/MapPage" component={MapPage} />
        <Route exact path="/UserPage" component={UserPage} />
        <Route exact path="/AddNewUser" component={AddNewUser} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
