import ActivityIndicatorViewNativeComponent from "react-native/Libraries/Components/ActivityIndicator/ActivityIndicatorViewNativeComponent";
import { act } from "react-test-renderer";
import { GET_TODO_SUCCESS, GET_TODO_FAIL, 
  DELETE_TODO_SUCCESS, DELETE_TODO_FAIL,
  CREATE_TODO_SUCCESS, CREATE_TODO_FAIL
 } from "../actions";
import { combineReducers } from "redux";


const initState = {
  lists: [],
  editId: null
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_TODO_SUCCESS:
      console.log("reducer GET_TODO_SUCCESS", action.list);
      return {
        ...state,
        lists: [...action.list]
      };
    case GET_TODO_FAIL:
      console.log("reducer GET_TODO_FAIL", action.error);
      return {
        ...state,
        lists: action.error
      };

    case DELETE_TODO_SUCCESS:
      console.log("reducer DELETE_TODO_SUCCESS", action.id);
      var newList = state.lists.filter(list => list.id !== action.id);
      return {
        ...state,
        lists: [...newList]
      };
    case DELETE_TODO_FAIL:
      console.log("reducer DELETE_TODO_FAIL", action.error);
      return {
        ...state,
        lists: action.error
      };

      case CREATE_TODO_SUCCESS:
      console.log("reducer CREATE_TODO_SUCCESS", action.item);
      var newList = state.lists.concat(action.item);
      return {
        ...state,
        lists: [...newList]
      };

      case CREATE_TODO_FAIL:
      console.log("reducer CREATE_TODO_FAIL", action.error);
      return {
        ...state,
        lists: action.error
      };


    // case GET_EDIT_LIST_ID:
    //   console.log("reducer GET_EDIT_LIST_ID", action.payload.id);
    //   return {
    //     ...state,
    //     editId: action.payload.id
    //   };
    // case EDIT_LIST_SUCCESS:
    //   const newLists = state.lists.map(item =>
    //     item.id === action.payload.list.id ? action.payload.list : item
    //   );
    //   console.log("reducer EDIT_LIST_SUCCESS", newLists);
    //   return {
    //     ...state,
    //     lists: [...newLists],
    //     editId: null
    //   };
    // case DELETE_LIST_SUCCESS:
    //   console.log("reducer DELETE_LIST_SUCCESS", action.payload.id);
    //   const newList = state.lists.filter(list => list.id !== action.payload.id);

    //   return {
    //     ...state,
    //     lists: [...newList]
    //   };
    default:
      return { ...state };
  }
};

export default reducer;
