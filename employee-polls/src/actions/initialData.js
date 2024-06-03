import { getUserQuestionData } from "../utils/api";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";

export function handleInitialData() {
    return (dispatch) => {
        return getUserQuestionData().then(({ users, questions }) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
        });
    };
}