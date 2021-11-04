import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useValidator } from 'react-joi'; // src: https://www.npmjs.com/package/react-joi
import todoLogo from '../images/todoLogo.png';// src Image: https://images-na.ssl-images-amazon.com/images/I/41da3NERJ4L.png
import schema from '../utils/loginValidation';
import { login } from '../services/api';

const Login = () => {
  const [haveAccount, setHaveAccount] = useState(false);
  const [currUser, setCurrUser] = useState({});
  const [userTasks, setUserTasks] = useState([]);

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
    const currData = state.$data;
    validate();
    const { data } = await login(currData);

    setHaveAccount(false);
    if (data.message) return window.alert('user not found');
    const { user, tasks } = data;
    setCurrUser(user);
    setUserTasks(tasks);
    setHaveAccount(true);
    return window.alert('user found');
  };

  return (
    <div>
      { haveAccount
        ? (
          <Redirect to={{
            pathname: '/main',
            state: { tasks: userTasks, user: currUser },
          }}
          />
        )
        : (
          <>
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
              <Link to="/create">Não possui Cadastro? Clique aqui e cadastre-se agora!</Link>
              <br />
              <Button onClick={checkInputs} variant="primary" type="button">
                Submit
              </Button>
            </Form>
          </>
        ) }

    </div>
  );
};

export default Login;
