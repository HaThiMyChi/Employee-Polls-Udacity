import { connect } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { handleAddAnswer } from "../../actions/questions";
import "../../styles/pollpage.css";

const PollPage = ({ dispatch, authSliceUser, question, author }) => {

    const navigate = useNavigate();

    if (!authSliceUser || !question || !author) {
        return <Navigate to="/404" />;
    }

    const userChoseOptionOne = question.optionOne.votes.includes(authSliceUser.id);
    const userChoseOptionTwo = question.optionTwo.votes.includes(authSliceUser.id)
    const notAnsweredYet = userChoseOptionOne || userChoseOptionTwo;

    const hanldeOptionOne = (e) => {
        e.preventDefault();
        dispatch(handleAddAnswer(question.id, "optionOne"));
        navigate("/");
    };

    const handleOptionTwo = (e) => {
        e.preventDefault();
        dispatch(handleAddAnswer(question.id, "optionTwo"));
        navigate("/");
    };

    const calcPercentageVoted = (option, question) => {
        const numberVotesTotal = question.optionOne.votes.length + question.optionTwo.votes.length;
        switch (option) {
            case "optionOne":
                return question.optionOne.votes.length / numberVotesTotal * 100 + " %";
            case "optionTwo":
                return question.optionTwo.votes.length / numberVotesTotal * 100 + " %";
            default:
                return "";
        }
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mt-9">Poll by {author.id}</h1>

            <div className="flex justify-center">
                <img src={author.avatarURL} alt="Profile" className="h-24 w-24" />
            </div>

            <div className="flex justify-center">
                <h2 className="text-2xl font-bold mt-6">Would You Rather?</h2>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
                <button className={"p-2 rounded-xl bg-zinc-100 hover:shadow-xl transition " + (userChoseOptionOne ? "bg-cyan-500" : "")} onClick={hanldeOptionOne} disabled={notAnsweredYet} >
                    <div className={userChoseOptionOne ? "chosen" : ""}>
                        <p className="font-bold mb-2">{question.optionOne.text}</p>
                        {!notAnsweredYet && <p className="underline underline-offset-4 mb-3">Click</p>}
                        {notAnsweredYet && <p className="text-xs">Votes: {question.optionOne.votes.length}  ({calcPercentageVoted("optionOne", question)})</p>}
                    </div>
                </button>

                <button onClick={handleOptionTwo} disabled={notAnsweredYet}
                    className={"p-2 rounded-xl bg-zinc-100 hover:shadow-xl transition " + (userChoseOptionTwo ? "bg-cyan-500" : "")}>
                    <div className={userChoseOptionTwo ? "chosen" : ""}>
                        <p className="font-bold mb-2">{question.optionTwo.text}</p>
                        {!notAnsweredYet &&
                            <p className="underline underline-offset-4 mb-3">Click</p>
                        }
                        {notAnsweredYet &&
                            <p className="text-xs">Votes: {question.optionTwo.votes.length} ({calcPercentageVoted("optionTwo", question)})</p>
                        }
                    </div>

                </button>
            </div>
        </div>
    );
};
const mapStateToProps = ({ authSliceUser, users, questions }) => {
    try {
        const question = Object.values(questions).find((question) => question.id === useParams().id);
        const author = Object.values(users).find((user) => user.id === question.author);
        return { authSliceUser, question, author }
    } catch (e) {
        return <Navigate to="/404" />
    };
}

export default connect(mapStateToProps)(PollPage);