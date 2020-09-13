import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LazyLoader from './components/LazyLoader/LazyLoader';
import './App.scss';
import Menu from './components/Menu/Menu';
import { ReactComponent as CaretIcon } from './components/Menu/Icons/caret.svg';

const LinePage = React.lazy(() => import('./pages/LinePage/LinePage'));
const SwitchGraphPage = React.lazy(() => import('./pages/SwitchGraphPage/SwitchGraphPage'));
const SurfacePlotPage = React.lazy(() => import('./pages/SurfacePlotPage/SurfacePlotPage'));

function App() {
  return (
    <Router>
      <Menu navIcon={<CaretIcon />} title={'React Plotly'} />
      <Switch>
        <Route exact path="/" component={LazyLoader(LinePage)} />
        <Route exact path="/switch-graph" component={LazyLoader(SwitchGraphPage)} />
        <Route exact path="/surface-plot" component={LazyLoader(SurfacePlotPage)} />
      </Switch>
    </Router>
  );
}

export default App;
