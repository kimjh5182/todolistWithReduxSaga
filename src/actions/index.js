export const CREATE_TODO = "CREATE_TODO";
export const CREATE_TODO_SUCCESS = "CREATE_TODO_SUCCESS";
export const CREATE_TODO_FAIL = "CREATE_TODO_FAIL";

export const UPDATE_TODO = "UPDATE_TODO";
export const UPDATE_TODO_SUCCESS = "UPDATE_TODO_SUCCESS";
export const UPDATE_TODO_FAIL = "UPDATE_TOD_FAIL";


export const DELETE_TODO = "DELETE_TODO";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const DELETE_TODO_FAIL = "DELETE_TODO_FAIL";


export const GET_TODO = "GET_TODO";
export const GET_TODO_SUCCESS = "GET_TODO_SUCESS";
export const GET_TODO_FAIL = "GET_TODO_FAIL";



  
  export const createTodo = content => ({
    type: CREATE_TODO,
    content: content
  });
  export const createTodoSuccess = item => ({
    type: CREATE_TODO_SUCCESS,
    item: item
  });
  export const createTodoFail = error => ({
    type: CREATE_TODO_FAIL,
    error
  });


  export const updateTodo = (id,content) => ({
    type: UPDATE_TODO,
    payload: { id:id,content:content }
  });
  export const updateTodoSuccess = item => ({
    type: UPDATE_TODO_SUCCESS,
    payload: { id:id,content:content }
  });

  export const updateTodoFail = item => ({
    type: UPDATE_TODO_FAIL,
    error
  });



  export const deleteTodo = id => ({
    type: DELETE_TODO,
    id:id,
  });
  export const deleteTodoSuccess = id => ({
    type: DELETE_TODO_SUCCESS,
    id: id
  });

  export const deleteTodoFail = error => ({
    type: DELETE_TODO_FAIL,
    error
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

