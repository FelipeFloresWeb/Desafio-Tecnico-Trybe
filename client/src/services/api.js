import axios from 'axios';

const environmentVariableUrl = process.env.URL || 'http://localhost:4000';

export const initTask = async (id) => {
  const fetchApi = await axios.post(`${environmentVariableUrl}/initTask/${id}`);

  return fetchApi;
};

export const doneTask = async (id) => {
  const fetchApi = await axios.post(`${environmentVariableUrl}/delete/${id}`);

  return fetchApi;
};

export const addTask = async (data) => {
  const fetchApi = await axios.post('/addTask', data);

  return fetchApi;
};

export const getTasks = async (id) => {
  const fetchApi = await axios.post(`${environmentVariableUrl}/tasks`, { id });

  return fetchApi;
};

export const createUser = async (data) => {
  const fetchApi = await axios.post(`${environmentVariableUrl}/create`, data);

  return fetchApi;
};

export const login = async (data) => {
  const fetchApi = await axios.post(`${environmentVariableUrl}/login`, data);

  return fetchApi;
};
