export const SET_ID = 'SET_ID';

export const CREATE_TODO = 'CREATE_TODO';
export const CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS';

export const UPDATE_TODO = 'UPDATE_TODO';
export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS';

export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';

export const GET_TODO = 'GET_TODO';
export const GET_TODO_SUCCESS = 'GET_TODO_SUCESS';

export const setId = id => ({
  type: SET_ID,
  id: id,
});

export const createTodo = content => ({
  type: CREATE_TODO,
  content: content,
});
export const createTodoSuccess = item => ({
  type: CREATE_TODO_SUCCESS,
  item: item,
});

export const updateTodo = (id, content) => ({
  type: UPDATE_TODO,
  payload: {id: id, content: content},
});
export const updateTodoSuccess = (item, id) => ({
  type: UPDATE_TODO_SUCCESS,
  payload: {id: id, item: item},
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id: id,
});
export const deleteTodoSuccess = id => ({
  type: DELETE_TODO_SUCCESS,
  id: id,
});

export const getTodo = () => ({
  type: GET_TODO,
});
export const getTodoSuccess = list => ({
  type: GET_TODO_SUCCESS,
  list: list,
});
