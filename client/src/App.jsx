import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/main" component={Main} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
