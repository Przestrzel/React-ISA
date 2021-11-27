import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './App.scss';

import Header from './components/header/Header';
import Teams from './components/teams/TeamsComponent';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/teams' component={Teams} />

        <Route path='/'>
          <Redirect to='/teams' />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
