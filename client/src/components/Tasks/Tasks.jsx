import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

const Tasks = (props) => {
  const { tasks } = props;
  return (
    <div>
      {tasks.length < 1
        ? <h1>Parece que voce não possui nenhuma tarefa pendente :)</h1>
        : tasks.map((task) => (
          <Card key={task.nome}>
            <Card.Header as="h5">Primeira Tarefa</Card.Header>
            <Card.Body>
              <Card.Title>Correr</Card.Title>
              <Card.Text>
                7h as 7:30hrs
              </Card.Text>
              <Button variant="primary">Finalizar Tarefa</Button>
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
