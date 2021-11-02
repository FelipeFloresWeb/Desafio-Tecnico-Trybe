/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Header from '../components/Header/Header';
import Tasks from '../components/Tasks/Tasks';
import { getTasks } from '../services/api';
import TaskForm from '../components/TaskForm/TaskForm';

const Main = (props) => {
  const { location: { state: { email, id, tasks } } } = props;
  const [addTask, setAddTask] = useState(false);
  const [user, setUser] = useState({
    userId: id,
    nome: '',
    email,
    tarefas: tasks,
  });

  useEffect(() => {
    const mount = async () => {
      const { data } = await getTasks(id);
      setUser((old) => ({
        ...old,
        nome: data.user.nome,
        tarefas: data.tasks,
      }));
    };
    mount();
    return () => {
      setUser({});
      setAddTask('');
    };
  }, []);

  const addTaskForm = async () => {
    setAddTask(!addTask);
  };

  const addTasks = (tarefas) => {
    setUser((old) => ({
      ...old,
      tarefas: user.tarefas.concat(tarefas),
    }));
  };

  const removeTask = (taskId) => {
    setUser((old) => ({
      ...old,
      tarefas: user.tarefas.filter((task) => task.id !== taskId),
    }));
  };

  return (
    <div>
      <Header name={user.nome} />
      <Link to="/login">Voltar para login</Link>
      <Button onClick={addTaskForm} variant="primary" type="button">
        Adicionar nova tarefa
      </Button>
      {addTask
        ? (
          <TaskForm
            addTaskForm={addTaskForm}
            addTasks={addTasks}
            id={id}
            email={email}
          />
        ) : <div />}
      <Tasks removeTask={removeTask} tasks={user.tarefas} />
    </div>
  );
};

Main.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default Main;
