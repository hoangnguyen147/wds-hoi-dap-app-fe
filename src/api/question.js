import callApi from "./index";

export function addQuestion(data) {
    return callApi({
        url: "/questions/create",
        method: "post",
        data: data,
    })
}

export function getQuestion(category) {
    return callApi({
        url: `/questions?category=${category}`,
        method: "get",
    })
}
