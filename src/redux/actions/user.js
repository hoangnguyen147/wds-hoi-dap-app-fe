import { createAction } from "@reduxjs/toolkit";
import * as constant from "../constant";
import * as api from "../../api/user";

export const userLoginSuccess = createAction(constant.LOGIN_SUCCESS);
export const setLoading = createAction(constant.SET_LOADING);
export const userRegisterSuccess = createAction(constant.REGISTER_SUCCESS);
export const userLogout = createAction(constant.LOGOUT);

export const userLogin = (data) => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        try {
            const res = await api.userLogin(data);
            dispatch(userLoginSuccess(res));
            console.log("res ",res)
        } catch (err) {
            console.log(err);
        }
        dispatch(setLoading(false))
    }
}

export const userRegister = (data) => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        try {
            const res = await api.userRegister(data);
            dispatch(userRegisterSuccess(res));
        } catch (err) {
            console.log(err);
        }
        dispatch(setLoading(false));
    }
}

