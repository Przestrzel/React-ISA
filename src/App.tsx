import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './App.scss';

import Header from './components/header/Header';
import Teams from './components/teams/TeamsComponent';
import TeamDetails from './components/teams/TeamDetails';

import PlayerDetails from './components/players/PlayerDetails';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route
          path='/teams/:teamName/players/:id'
          exact
          component={PlayerDetails}
        />
        <Route path='/teams/:teamName' exact component={TeamDetails} />
        <Route path='/teams' exact component={Teams} />
        <Route path='/'>
          <Redirect to='/teams' />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
