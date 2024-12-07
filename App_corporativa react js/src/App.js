import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Stats from './pages/Stats';
import NotFound from './pages/NotFound';

const App = () => (
  <Router>
    <Navigation />
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/employees" component={Employees} />
      <Route path="/stats" component={Stats} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
