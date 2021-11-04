/* eslint-disable no-underscore-dangle */
import React, { /* useEffect, */ useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Header from '../components/Header/Header';
import Tasks from '../components/Tasks/Tasks';
import TaskForm from '../components/TaskForm/TaskForm';
import OrderTasks from '../components/OrderTasks/OrderTasks';

const Main = (props) => {
  const { location: { state: { user, tasks } } } = props;
  const [addTask, setAddTask] = useState(false);
  const [currUser, setUser] = useState({
    userId: user._id,
    nome: user.nome,
    email: user.email,
    tarefas: tasks,
  });

  const addTaskForm = async () => {
    setAddTask(!addTask);
  };

  const addTasks = (tarefas) => {
    setUser((old) => ({
      ...old,
      tarefas: currUser.tarefas.concat(tarefas),
    }));
  };

  const finishTask = (taskId) => {
    // arr copy
    const arrTask = currUser.tarefas;

    // take curr task
    const currTask = arrTask.find((task) => task._id === taskId);

    // take index of task and modify status
    const taskIndex = arrTask.indexOf(currTask);
    currTask.status = 'Pronto';

    // remove old task with status='Pendente', and update to status='Em andamento'
    arrTask.splice(taskIndex, 1, currTask);

    setUser((old) => ({
      ...old,
      tarefas: arrTask,
    }));
  };

  const taskStart = (taskId) => {
    // arr copy
    const arrTask = currUser.tarefas;

    // take curr task
    const currTask = arrTask.find((task) => task._id === taskId);

    // take index of task and modify status
    const taskIndex = arrTask.indexOf(currTask);
    currTask.status = 'Em andamento';

    // remove old task with status='Pendente', and update to status='Em andamento'
    arrTask.splice(taskIndex, 1, currTask);

    setUser((old) => ({
      ...old,
      tarefas: arrTask,
    }));
  };

  const sortTasks = (orderedArry) => {
    console.log(orderedArry);
    setUser((old) => ({
      ...old,
      tarefas: orderedArry,
    }));
  };

  return (
    <div>
      <Header name={currUser.nome} />
      <Link to="/">Logout</Link>
      <OrderTasks sortTasks={sortTasks} currTasks={currUser.tarefas} />
      <Button onClick={addTaskForm} variant="primary" type="button">
        Adicionar nova tarefa
      </Button>
      {addTask
        ? (
          <TaskForm
            addTaskForm={addTaskForm}
            addTasks={addTasks}
            id={currUser.userId}
            email={currUser.email}
          />
        ) : <div />}
      <Tasks taskStart={taskStart} finishTask={finishTask} tasks={currUser.tarefas} />
    </div>
  );
};

Main.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default Main;
