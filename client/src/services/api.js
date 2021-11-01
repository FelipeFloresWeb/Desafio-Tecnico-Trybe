import axios from 'axios';

export const createUser = async (data) => {
  const fetchApi = await axios.post('http://localhost:4000/create', data);
  // const response = await fetchApi.data;
  return fetchApi;
};

export const login = async (data) => {
  try {
    const fetchApi = await axios.post('http://localhost:4000/login', data);
    console.log(fetchApi);
    return fetchApi;
  } catch (error) {
    return { messageError: error.message };
  }
};
