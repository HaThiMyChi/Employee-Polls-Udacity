import { ADD_ANSWER_USER, ADD_QUESTION_USER, RECEIVE_USERS } from "../constant/constant";

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    };
}

export function addAnswerUser(authedUser, qid, answer) {
    return {
        type: ADD_ANSWER_USER,
        authedUser,
        qid,
        answer
    }
}

export function addQuestionUser(author, id) {
    return {
        type: ADD_QUESTION_USER,
        author,
        id
    }
}