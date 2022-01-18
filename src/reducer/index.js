import ActivityIndicatorViewNativeComponent from 'react-native/Libraries/Components/ActivityIndicator/ActivityIndicatorViewNativeComponent';
import {act} from 'react-test-renderer';
import {
  GET_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  CREATE_TODO_SUCCESS,
  SET_ID,
  UPDATE_TODO_SUCCESS,
} from '../actions';
import {combineReducers} from 'redux';

const initState = {
  lists: [],
  editId: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_ID:
      return {
        ...state,
        editId: action.id,
      };

    //get todo list
    case GET_TODO_SUCCESS:
      console.log('reducer GET_TODO_SUCCESS', action.list);
      return {
        ...state,
        lists: [...action.list],
      };

    //delete
    case DELETE_TODO_SUCCESS:
      console.log('reducer DELETE_TODO_SUCCESS', action.id);
      var newList = state.lists.filter(list => list.id !== action.id);
      return {
        ...state,
        lists: [...newList],
      };

    //create new todo
    case CREATE_TODO_SUCCESS:
      console.log('reducer CREATE_TODO_SUCCESS', action.item);
      var newList = state.lists.concat(action.item);
      return {
        ...state,
        lists: [...newList],
      };

    //update  todo
    case UPDATE_TODO_SUCCESS:
      console.log('reducer UPDATE_TODO_SUCCESS', action.payload.item);
      var newList = state.lists.map(i =>
        i.id === action.payload.id ? action.payload.item : i,
      );
      return {
        ...state,
        lists: [...newList],
      };
    default:
      return {...state};
  }
};

export default reducer;
