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

const deleteTodo = async id =>{
  console.log(config.api + 'todo/'+String(id)+'/');
  const response = await axios.delete(
    config.api + 'todo/'+String(id)+'/',
  );
  console.log('delete',response)
  return response;
}

const createTodo = async content =>{
  console.log(config.api + 'todo/');
  const response = await axios.post(
    config.api + 'todo/',{content:content}
  );
  console.log(response)
  return response;
}

const updateTodo = async (id,content) =>{
  console.log(config.api + 'todo/'+String(id)+'/');
  const response = await axios.patch(
    config.api + 'todo/'+String(id)+'/',{content:content}
  );
  console.log(response)
  return response;
}

const getTodoApi = {
    getTodoList,
    deleteTodo,
    createTodo,
    updateTodo
};

export default getTodoApi;
