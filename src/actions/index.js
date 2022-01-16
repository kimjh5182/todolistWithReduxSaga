export const CREATE_TODO = "CREATE_TODO";
export const CREATE_TODO_SUCCESS = "CREATE_TODO_SUCCESS";
export const CREATE_TODO_FAIL = "CREATE_TODO_FAIL";

export const UPDATE_TODO = "UPDATE_TODO";
export const UPDATE_TODO_SUCESS = "UPDATE_TODO_SUCESS";
export const UPDATE_TODO_FAIL = "UPDATE_TOD_FAIL";


export const DELETE_TODO = "DELETE_TODO";
export const DELETE_TODO_SUCESS = "DELETE_TODO_SUCESS";
export const DELETE_TODO_FAIL = "DELETE_TODO_FAIL";


export const GET_TODO = "GET_TODO";
export const GET_TODO_SUCCESS = "GET_TODO_SUCESS";
export const GET_TODO_FAIL = "GET_TODO_FAIL";



  
  export const createTodo = item => ({
    type: CREATE_TODO,
    payload: {item}
  });
  export const updateTodo = item => ({
    type: UPDATE_TODO,
    payload: { item }
  });
  export const deleteTodo = id => ({
    type: DELETE_TODO,
    payload: { id }
  });
  export const getTodo = () => ({
    type: GET_TODO,
  });
  export const getTodoSuccess = list => ({
    type: GET_TODO_SUCCESS,
    list:list
  });

  export const getTodoFail = error => ({
    type: GET_TODO_FAIL,
    error
  });

