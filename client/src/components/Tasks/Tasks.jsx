import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Tasks = () => (
  <div>
    <Card>
      <Card.Header as="h5">Primeira Tarefa</Card.Header>
      <Card.Body>
        <Card.Title>Correr</Card.Title>
        <Card.Text>
          7h as 7:30hrs
        </Card.Text>
        <Button variant="primary">Finalizar Tarefa</Button>
      </Card.Body>
    </Card>
  </div>
);

export default Tasks;
