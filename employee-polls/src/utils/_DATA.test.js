const {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer, } = require("./_DATA");

describe("_getUsers", () => {
    it("should retrieve the users data", async () => {
        const users = await _getUsers();
        expect(users).toBeDefined();
    });
});

describe("_getQuestions", () => {
    it("should retrieve the questions data", async () => {
        const questions = await _getQuestions();
        expect(questions).toBeDefined();
    });
});

describe("_saveQuestionAnswer", () => {
    it("should save a user's answer to a question", async () => {
        const user = {
            authedUser: "sarahedo",
            qid: "8xf0y6ziyjabvozdd253nd",
            answer: "optionOne"
        }

        const result = await _saveQuestionAnswer(user);
        expect(result).toBeTruthy();
    });

    it("should reject when required fields are missing", async () => {
        await expect(
            _saveQuestionAnswer({ authedUser: "", qid: "", answer: "" })
        ).rejects.toBeTruthy();
        await expect(
            _saveQuestionAnswer({ authedUser: "sarahedo", qid: "", answer: "" })
        ).rejects.toBeTruthy();
    });
});