import axios from 'axios';

export const createUser = async (data) => {
  const fetchApi = await axios.post('http://localhost:4000/create', data);
  const response = await fetchApi.data;
  return response;
};

export const login = async (data) => {
  const fetchApi = await axios.post('http://localhost:4000/login', data);
  console.log(fetchApi);
  return fetchApi;
};
