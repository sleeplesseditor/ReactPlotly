import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LazyLoader from './components/LazyLoader/LazyLoader';
import ErrorBoundary from './pages/ErrorBoundary';
import './App.scss';
import Menu from './components/Menu/Menu';
import { ReactComponent as CaretIcon } from './components/Menu/Icons/caret.svg';
import {Provider} from 'react-redux';
import store from "./store";

const LinePage = React.lazy(() => import('./pages/LinePage/LinePage'));
const PieChartPage = React.lazy(() => import('./pages/PieChartPage/PieChartPage'));
const SwitchGraphPage = React.lazy(() => import('./pages/SwitchGraphPage/SwitchGraphPage'));
const SurfacePlotPage = React.lazy(() => import('./pages/SurfacePlotPage/SurfacePlotPage'));
const GDPChoroplethMapPage = React.lazy(() => import('./pages/GDPChoroplethMapPage/GDPChoroplethMapPage'));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Menu navIcon={<CaretIcon />} title={'React Plotly'} />
        <ErrorBoundary>
          <Switch>
            <Route exact path="/" component={LazyLoader(LinePage)} />
            <Route exact path="/pie-chart" component={LazyLoader(PieChartPage)} />
            <Route exact path="/switch-graph" component={LazyLoader(SwitchGraphPage)} />
            <Route exact path="/surface-plot" component={LazyLoader(SurfacePlotPage)} />
            <Route exact path="/gapminder-map" component={LazyLoader(GDPChoroplethMapPage)} />
          </Switch>
        </ErrorBoundary>
        <Redirect to="/"/>
      </Router>
    </Provider>
  );
}

export default App;
