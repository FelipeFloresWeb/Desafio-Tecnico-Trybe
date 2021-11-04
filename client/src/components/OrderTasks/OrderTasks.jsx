import React from 'react';
import { Dropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
const OrderArrByName = (a, b) => {
  if (a.nome > b.nome) {
    return 1;
  }
  if (a.nome < b.nome) {
    return -1;
  }
  return 0;
};

const getStatusPriority = (status) => {
  switch (status) {
    case 'Pendente':
      return 'a';
    case 'Em andamento':
      return 'b';
    case 'Pronto':
      return 'c';
    default:
      return false;
  }
};

const OrderArrByStatus = (a, b) => {
  const first = getStatusPriority(a.status);
  const second = getStatusPriority(b.status);

  if (first > second) {
    return 1;
  }
  if (first < second) {
    return -1;
  }
  return 0;
};

const OrderArrByTaskCreation = (a, b) => {
  // https://ricardo-reis.medium.com/o-m%C3%A9todo-sort-do-array-javascript-482576734e0a
  const firstDate = new Date(a.dataDeCriacao);
  const secondDate = new Date(b.dataDeCriacao);

  return firstDate - secondDate;
};

const OrderTasks = (props) => {
  const { currTasks, sortTasks } = props;

  const orderTasks = (orderBy) => {
    if (orderBy === 'name') {
      const orderByName = currTasks.sort(OrderArrByName);
      sortTasks(orderByName);
    }
    if (orderBy === 'status') {
      const orderByStatus = currTasks.sort(OrderArrByStatus);
      sortTasks(orderByStatus);
    }
    if (orderBy === 'dataDeCriação') {
      const orderByTaskCreation = currTasks.sort(OrderArrByTaskCreation);
      sortTasks(orderByTaskCreation);
    }
  };

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Organizar Tarefas Por:
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => orderTasks('name')}>Nome</Dropdown.Item>
          <Dropdown.Item onClick={() => orderTasks('status')}>Status</Dropdown.Item>
          <Dropdown.Item onClick={() => orderTasks('dataDeCriação')}>Data de Criação</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

OrderTasks.propTypes = {
  currTasks: PropTypes.arrayOf({}),
}.isRequired;

export default OrderTasks;
