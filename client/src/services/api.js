import axios from 'axios';

const createUser = async (data) => {
  // const { nome, email, senha } = data;
  const fetchApi = await axios.post('http://localhost:4000', data);
  const response = await fetchApi.data;
  return response;
};

export default createUser;
