import callApi from "./index";

export function userLogin(data) {
    return callApi({
        url: "/users/signin",
        method: "post",
        data: data,
    })
}

export function userRegister(data) {
    return callApi({
        url: "/users/register",
        method: "post",
        data: data,
    })
}


