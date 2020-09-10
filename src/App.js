import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LazyLoader from './components/LazyLoader/LazyLoader';
import './App.scss';
import Menu from './components/Header/Menu/Menu';

const LinePage = React.lazy(() => import('./pages/LinePage/LinePage'));
const SwitchGraphPage = React.lazy(() => import('./pages/SwitchGraphPage/SwitchGraphPage'));
const SurfacePlotPage = React.lazy(() => import('./pages/SurfacePlotPage/SurfacePlotPage'));

function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route exact path="/" component={LazyLoader(LinePage)} />
        <Route exact path="/switch-graph" component={LazyLoader(SwitchGraphPage)} />
        <Route exact path="/surface-plot" component={LazyLoader(SurfacePlotPage)} />
      </Switch>
    </Router>
  );
}

export default App;
