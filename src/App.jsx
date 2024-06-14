import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Order from './components/Order';
import Feedback from './components/Feedback';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/order" component={Order} />
        <Route path="/feedback" component={Feedback} />
      </Switch>
    </Router>
  );
}

export default App;
