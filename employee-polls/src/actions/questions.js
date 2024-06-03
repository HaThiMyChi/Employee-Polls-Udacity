import { ADD_QUESTION, ADD_ANSWER_QUESTION, RECEIVE_QUESTIONS } from "../constant/constant";

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