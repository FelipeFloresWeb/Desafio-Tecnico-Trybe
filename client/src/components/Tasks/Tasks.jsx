/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { doneTask, initTask } from '../../services/api';

const Tasks = (props) => {
  const { tasks, finishTask, taskStart } = props;

  const deleteCurrTask = async (id) => {
    await doneTask(id);
    finishTask(id);
  };

  const initCurrTask = async (id) => {
    await initTask(id);
    taskStart(id);
  };

  return (
    <div>
      {tasks.length < 1
        ? <h1>Parece que voce não possui nenhuma tarefa pendente :)</h1>
        : tasks.map((task) => (
          <Card key={task._id}>
            <Card.Header as="h5">{`Prioridade: ${task.prioridade.toUpperCase()}`}</Card.Header>
            <Card.Header as="h5">{`Status: ${task.status}`}</Card.Header>
            <Card.Body>
              <Card.Title>{`Nome da tarefa: ${task.nome}`}</Card.Title>
              <Card.Text>{`Descrição: ${task.descricao}`}</Card.Text>
              <Button style={task.status === 'Em andamento' ? { display: 'flex' } : { display: 'none' }} onClick={() => deleteCurrTask(task._id)} variant="primary">Concluir Tarefa</Button>
              <Button style={task.status === 'Pendente' ? { display: 'flex' } : { display: 'none' }} onClick={() => initCurrTask(task._id)} variant="secondary">Iniciar Tarefa</Button>
              <Card.Header style={task.status === 'Pronto' ? { display: 'flex', color: 'green' } : { display: 'none' }} as="h5">Tarefa Concluida</Card.Header>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.arrayOf({}),
}.isRequired;

export default Tasks;
