import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Album from '../pages/Album';
import Login from '../pages/Login';
import Favorites from '../pages/Favorites';
import Profile from '../pages/Profile';
import ProfileEdit from '../pages/ProfileEdit';
import Search from '../pages/Search';
import NotFound from '../pages/NotFound';
import Header from './Header';

class Content extends Component {
  render() {
    return (
      <main>
        <Header />
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/search" component={ Search } />
          <Route exact path="/album/:id" component={ Album } />
          <Route exact path="/favorites" component={ Favorites } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/profile/edit" component={ ProfileEdit } />
          <Route path="" component={ NotFound } />
        </Switch>
      </main>
    );
  }
}
export default Content;
