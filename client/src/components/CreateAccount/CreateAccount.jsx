import React from 'react';
import { Form, Button } from 'react-bootstrap';

const CreateAccount = () => (
  <div>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nome: </Form.Label>
        <Form.Control type="name" placeholder="Nome" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email: </Form.Label>
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha: </Form.Label>
        <Form.Control type="password" placeholder="Senha" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword2">
        <Form.Label>Repita a Senha: </Form.Label>
        <Form.Control type="password" placeholder="Senha" />
      </Form.Group>
      <Button variant="primary" type="button">
        Cadastrar
      </Button>
    </Form>
  </div>
);

export default CreateAccount;
