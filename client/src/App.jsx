import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Login from './pages/Login';
import Main from './pages/Main';

const App = () => (
  <Container>
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/main" component={Main} />
      </Switch>
    </BrowserRouter>
  </Container>
);

export default App;
