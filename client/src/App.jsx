import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Login from './pages/Login';
import Main from './pages/Main';
import Create from './pages/Create';

const App = () => (
  <Container>
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/create" component={Create} />
      </Switch>
    </BrowserRouter>
  </Container>
);

export default App;
