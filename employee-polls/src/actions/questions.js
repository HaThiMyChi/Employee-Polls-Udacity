import { ADD_QUESTION, ADD_ANSWER_QUESTION, RECEIVE_QUESTIONS } from "../constant/constant";
import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { addAnswerUser, addQuestionUser } from "./users";

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    };
}

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function addAnswerQuestion(author, qid, answer) {
    return {
        type: ADD_ANSWER_QUESTION,
        author,
        qid,
        answer
    }
}

export function handleAddQuestion(firstOption, secondOption) {
    return (dispatch, getState) => {
        const { authSliceUser } = getState();
        return saveQuestion(firstOption, secondOption, authSliceUser.id)
            .then((question) => {
                dispatch(addQuestion(question));
                dispatch(addQuestionUser(question));
            })
    };
}

export function handleAddAnswer(questionId, answer) {
    return (dispatch, getState) => {
        const { authSliceUser } = getState();
        return saveQuestionAnswer(authSliceUser.id, questionId, answer)
            .then(() => {
                dispatch(addAnswerQuestion(authSliceUser.id, questionId, answer));
                dispatch(addAnswerUser(authSliceUser.id, questionId, answer));
            });
    };
}