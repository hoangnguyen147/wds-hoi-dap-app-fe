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

export function getQuestionById(id) {
    return callApi({
        url: `/questions/${id}`,
        method: "get",
    })
}

export function deleteQuestionById(id) {
    return callApi({
        url: `/questions/${id}`,
        method: "delete",
    })
}

export function updateQuestionById(id, data) {
    return callApi({
        url: `/questions/${id}`,
        method: "patch",
        data: data,
    })
}