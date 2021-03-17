import { handleActions } from "redux-actions";
import * as actions from "../constant";

const defaultUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : "";

const initialState = {
    user: defaultUser,
}

const userReducer = handleActions(
    {
        [actions.LOGIN_SUCCESS]: (state, action) => {
          localStorage.setItem("user", JSON.stringify(action.payload));
          return {
            ...state,
            user: action.payload
          }
        },
        [actions.REGISTER_SUCCESS]: (state, action) => {
          const data = action.payload;
          return {
            ...state,
            user: action.payload
          }
        },
        [actions.LOGOUT]: (state, action) => {
          localStorage.removeItem("user");
          return {
            ...state,
            user: ""
          }
        }
    },
    initialState
)

export default userReducer;