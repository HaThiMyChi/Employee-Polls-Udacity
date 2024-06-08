import { _getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer } from "./_DATA";

export async function getUserQuestionData() {
    try {
        const [users, questions] = await Promise.all([
            _getUsers(),
            _getQuestions(),
        ]);
        return { users, questions };
    } catch (error) {
        console.error('Error fetching user and question data:', error);
        throw new Error('Failed to fetch user and question data');
    }
}

export function saveQuestion(optionOneText, optionTwoText, author) {
    return _saveQuestion({ optionOneText, optionTwoText, author });
}

export function saveQuestionAnswer(authedUserId, qid, answer) {
    return _saveQuestionAnswer({
        authedUser: authedUserId,
        qid,
        answer
    });
}
