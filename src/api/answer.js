import callApi from "./index";

export function createAnswer(data) {
    return callApi({
        url: "/answers/create",
        method: "post",
        data: data,
    })
}