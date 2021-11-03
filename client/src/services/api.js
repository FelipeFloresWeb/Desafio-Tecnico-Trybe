import axios from 'axios';

export const initTask = async (id) => {
  const fetchApi = await axios.post(`http://localhost:4000/initTask/${id}`);

  return fetchApi;
};

export const doneTask = async (id) => {
  const fetchApi = await axios.post(`http://localhost:4000/delete/${id}`);

  return fetchApi;
};

export const addTask = async (data) => {
  const fetchApi = await axios.post('http://localhost:4000/addTask', data);

  return fetchApi;
};

export const getTasks = async (id) => {
  const fetchApi = await axios.post('http://localhost:4000/tasks', { id });

  return fetchApi;
};

export const createUser = async (data) => {
  const fetchApi = await axios.post('http://localhost:4000/create', data);

  return fetchApi;
};

export const login = async (data) => {
  const fetchApi = await axios.post('http://localhost:4000/login', data);

  return fetchApi;
};
