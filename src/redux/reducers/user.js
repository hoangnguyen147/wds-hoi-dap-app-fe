import { handleActions } from "redux-actions";
import * as actions from "../constant";

const defaultUser = localStorage.getItem("user")
  ? JSON.stringify(localStorage.getItem("user"))
  : "";

const initialState = {
    user: defaultUser,
    isAdmin: false,
}

const userReducer = handleActions(
    {
        
    },
    initialState
)

export default userReducer;