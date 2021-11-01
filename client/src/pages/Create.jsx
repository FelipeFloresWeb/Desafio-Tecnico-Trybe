import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useValidator } from 'react-joi'; // src: https://www.npmjs.com/package/react-joi
import todoLogo from '../images/todoLogo.png';// src Image: https://images-na.ssl-images-amazon.com/images/I/41da3NERJ4L.png
import schema from '../utils/createValidation';
import { createUser } from '../services/api';

const Login = () => {
  // const [haveAccount, setHaveAcoount] = useState(false);

  const {
    state, setData, setExplicitField, validate,
  } = useValidator({
    initialData: {
      name: null,
      email: null,
      password: null,
      repeatPassword: null,
    },
    schema,
    explicitCheck: {
      name: false,
      email: false,
      password: false,
      repeatPassword: false,
    },
  });

  const updateName = (e) => {
    e.persist();
    setData((old) => ({
      ...old,
      name: e.target.value,
    }));
  };

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

  const updateRepeatPassword = (e) => {
    e.persist();
    setData((old) => ({
      ...old,
      repeatPassword: e.target.value,
    }));
  };

  const checkInputs = async () => {
    validate();
    const data = state.$data;
    const {
      name,
      email, password, repeatPassword,
    } = data;
    try {
      if (password !== repeatPassword) return window.alert('As senhas devem ser identicas');
      const { status } = await createUser({ name, email, password });
      console.log(status);
      if (!status || status !== 201) return window.alert('Usuário já cadastrado');
      return window.alert('Usuário cadastrado com sucesso');
    } catch (error) {
      return window.alert(`Mensagem servidor: ${error.message}, mensagem cliente: usuário já cadastrado`);
    }
  };

  return (
    <div>

      <img id="todo-logo" src={todoLogo} alt="To Do Logo" />
      <h1>Cadastro</h1>
      <Link to="/login">Voltar para login</Link>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nome Completo: </Form.Label>
          <Form.Control onChange={updateName} onBlur={() => setExplicitField('name', true)} type="text" placeholder="Nome Completo" />
        </Form.Group>
        {state.$errors.email.map((data) => data.$message).join(',')}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email: </Form.Label>
          <Form.Control onChange={updateEmail} onBlur={() => setExplicitField('email', true)} type="email" placeholder="Email" />
        </Form.Group>
        {state.$errors.email.map((data) => data.$message).join(',')}

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha: </Form.Label>
          <Form.Control onChange={updatePassword} onBlur={() => setExplicitField('password', true)} type="password" placeholder="Senha" />
          <Form.Text className="text-muted">Nunca forneça sua senha a ninguém.</Form.Text>
        </Form.Group>
        {state.$errors.password.map((data) => data.$message).join(',')}

        <Form.Group className="mb-3" controlId="formBasicRepeatPassword">
          <Form.Label>Repita a Senha: </Form.Label>
          <Form.Control onChange={updateRepeatPassword} onBlur={() => setExplicitField('repeatPassword', true)} type="password" placeholder="Repita a senha" />
        </Form.Group>
        {state.$errors.repeatPassword.map((data) => data.$message).join(',')}

        <br />
        <Button onClick={checkInputs} variant="primary" type="button">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
