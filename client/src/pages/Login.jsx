import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useValidator } from 'react-joi'; // src: https://www.npmjs.com/package/react-joi
import todoLogo from '../images/todoLogo.png';// src Image: https://images-na.ssl-images-amazon.com/images/I/41da3NERJ4L.png
import schema from '../utils/validations';
import { login } from '../services/api';

const Login = () => {
  // const [haveAccount, setHaveAcoount] = useState(false);

  const {
    state, setData, setExplicitField, validate,
  } = useValidator({
    initialData: {
      email: null,
      password: null,
    },
    schema,
    explicitCheck: {
      email: false,
      password: false,
    },
  });

  const updateEmail = (e) => {
    e.persist();
    setData((old) => ({
      ...old,
      email: e.target.value,
    }));
  };

  const updatePassword = (e) => {
    e.persist();
    setData((old) => ({
      ...old,
      password: e.target.value,
    }));
  };

  const checkInputs = async () => {
    const data = state.$data;
    validate();
    const loginUser = await login(data);
    if (loginUser) return window.alert('user not found');

    return window.alert('user found');
  };

  return (
    <div>
      <img id="todo-logo" src={todoLogo} alt="To Do Logo" />
      <h1>Lista de Tarefas da empresa</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email: </Form.Label>
          <Form.Control onChange={updateEmail} onBlur={() => setExplicitField('email', true)} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">Nunca forneça seu email a ninguém.</Form.Text>
        </Form.Group>
        {state.$errors.email.map((data) => data.$message).join(',')}

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha: </Form.Label>
          <Form.Control onChange={updatePassword} onBlur={() => setExplicitField('password', true)} type="password" placeholder="Password" />
        </Form.Group>
        {state.$errors.password.map((data) => data.$message).join(',')}

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button onClick={checkInputs} variant="primary" type="button">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
