import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Routes from './components/routes';
import 'antd/dist/antd.css';
import 'react-alice-carousel/lib/alice-carousel.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Routes} />
      </Switch>
    </Router>
  );
}
