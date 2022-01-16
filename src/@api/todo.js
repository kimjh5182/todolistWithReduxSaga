import axios from 'axios';
import config from '../config';

const getTodoList = async () => {
  console.log(config.api + 'todo/');
  const response = await axios.get(
    config.api + 'todo/',
  );
  console.log(response)
  return response;
};

const getTodoApi = {
    getTodoList,
};

export default getTodoApi;
