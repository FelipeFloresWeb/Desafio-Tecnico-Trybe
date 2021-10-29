import React from 'react';
import { Form, Button } from 'react-bootstrap';
import todoLogo from '../images/todoLogo.png';// src Image: https://images-na.ssl-images-amazon.com/images/I/41da3NERJ4L.png

const Login = () => (
  <div>
    <img id="todo-logo" src={todoLogo} alt="To Do Logo" />
    <h1>Lista de Tarefas da empresa</h1>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email: </Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">Nunca forneça seu email a ninguém.</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha: </Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="button">
        Submit
      </Button>
    </Form>
  </div>
);

export default Login;
