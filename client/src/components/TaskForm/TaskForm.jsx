import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import {
  Form, Col, Row, Button, FloatingLabel,
} from 'react-bootstrap';
import { addTask } from '../../services/api';

const TaskForm = (props) => {
  const { id, email, addTasks } = props;
  const inputTitle = useRef(null);
  const inputDescription = useRef(null);
  const inputPriority = useRef(null);

  const addCurrTask = async () => {
    const { data } = await addTask({
      id,
      email,
      nome: inputTitle.current.value,
      descricao: inputDescription.current.value,
      prioridade: inputPriority.current.value,
    });
    const { _id } = data;
    return addTasks({
      id: _id,
      email,
      nome: inputTitle.current.value,
      descricao: inputDescription.current.value,
      prioridade: inputPriority.current.value,
    });
  };

  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Nome da Tarefa:
        </Form.Label>
        <Col sm={10}>
          <Form.Control ref={inputTitle} type="email" placeholder="Nome da Tarefa" />
        </Col>
      </Form.Group>

      <FloatingLabel controlId="floatingTextarea2" label="Descrição da Tarefa">
        <Form.Control
          ref={inputDescription}
          as="textarea"
          placeholder="Descrição da Tarefa"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <br />
      <div>
        Prioridade:
        <Form.Control
          as="select"
          custom
          ref={inputPriority}
        >
          <option value="baixa">Baixa</option>
          <option value="media">Media</option>
          <option value="alta">Alta</option>
        </Form.Control>
      </div>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button onClick={addCurrTask} type="button">Adicionar Tarefa</Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

TaskForm.propTypes = {
  email: PropTypes.string,
  addTasks: PropTypes.func,
}.isRequired;

export default TaskForm;
