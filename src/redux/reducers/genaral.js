import { handleActions } from "redux-actions";
import * as actions from "../constant";

const initialState = {
  isLoading: false,
};

const generalReducer = handleActions(
  {
    [actions.SET_LOADING]: (state, action) => {
      return {
        ...state,
        isLoading: action.payload,
      };
    },
  },
  initialState
);
export default generalReducer;
