import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

import HomePage from './pages/HomePage';
import PlanetPage from './pages/PlanetPage';

const App = () => {
  return (
    <>
      <AppHeader />
      <main>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/planets/:id' component={PlanetPage} />
          <Redirect to="/" />
        </Switch>
      </main>
      <AppFooter />
    </>
  )
};

export default App;
