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
          <Card key={`${task.id} - ${task.descricao}`}>
            <Card.Header as="h5">{`Prioridade: ${task.prioridade.toUpperCase()}`}</Card.Header>
            <Card.Body>
              <Card.Title>{`${task.nome}`}</Card.Title>
              <Card.Text>
                {`${task.descricao}`}
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
