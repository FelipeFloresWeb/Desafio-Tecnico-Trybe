import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Header from '../components/Header/Header';
import Tasks from '../components/Tasks/Tasks';
import { getTasks } from '../services/api';
// this.props.location.state
const Main = (props) => {
  const { location: { state: { email } } } = props;
  const [user, setUser] = useState({
    nome: '',
    email,
    tarefas: [],
  });

  useEffect(() => {
    const mount = async () => {
      const { data: { nome, tasks } } = await getTasks(email);
      setUser((old) => ({
        ...old,
        nome,
        tarefas: tasks,
      }));
    };
    mount();
  }, []);

  const addNewTask = () => {
    console.log('nova função');
  };

  return (
    <div>
      <Header name={user.nome} />
      <Link to="/login">Voltar para login</Link>
      <Button onClick={addNewTask} variant="primary" type="button">
        Adicionar nova tarefa
      </Button>
      <Tasks tasks={user.tarefas} />
    </div>
  );
};

Main.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default Main;
