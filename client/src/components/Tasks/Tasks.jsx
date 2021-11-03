/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { deleteTask } from '../../services/api';

const Tasks = (props) => {
  const { tasks, removeTask } = props;

  const deleteCurrTask = async (id) => {
    await deleteTask(id);
    removeTask(id);
  };

  return (
    <div>
      {tasks.length < 1
        ? <h1>Parece que voce não possui nenhuma tarefa pendente :)</h1>
        : tasks.map((task) => (
          <Card key={task._id}>
            <Card.Header as="h5">{`Prioridade: ${task.prioridade.toUpperCase()}`}</Card.Header>
            <Card.Body>
              <Card.Title>{`${task.nome}`}</Card.Title>
              <Card.Text>
                {`${task.descricao}`}
              </Card.Text>
              <Button onClick={() => deleteCurrTask(task._id)} variant="primary">Finalizar Tarefa</Button>
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
