import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAddQuestion } from "../../actions/questions";
import { useState, useEffect } from 'react'


const NewPoll = (props) => {
    const { authSliceUser, dispatch } = props;

    const navigate = useNavigate();
    const [optionOneText, setOptionOneText] = useState("");
    const [optionTwoText, setOptionTwoText] = useState("");

    const handleOptionOneChange = (e) => {
        const value = e.target.value;
        setOptionOneText(value);
    };

    const handleOptionTwoChange = (e) => {
        const value = e.target.value;
        setOptionTwoText(value);
    };

    const handlePollSubmit = (e) => {
        e.preventDefault();
        dispatch(handleAddQuestion(optionOneText, optionTwoText));
        navigate("/");
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mt-9">New Poll</h1>
            <form onSubmit={handlePollSubmit}>

                <div className="mt-3">
                    <label htmlFor="firstOption"
                        data-testid="firstOptionLabel"
                        className="block text-sm font-medium text-slate-700">First Option</label>
                    <div className="mt-1">
                        <input
                            value={optionOneText}
                            onChange={handleOptionOneChange}
                            type="text"
                            name="firstOption"
                            id="firstOption"
                            data-testid="firstOption"
                            className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none" />
                    </div>
                </div>

                <div className="mt-3">
                    <label htmlFor="secondOption"
                        data-testid="secondOptionLabel"
                        className="block text-sm font-medium text-slate-700">Second Option</label>
                    <div className="mt-1">
                        <input
                            value={optionTwoText}
                            onChange={handleOptionTwoChange}
                            type="text"
                            name="secondOption"
                            id="secondOption"
                            data-testid="secondOption"
                            className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none" />
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <button type="submit"
                        data-testid="test-submit-button"
                        className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">
                        Add Poll
                    </button>
                </div>

            </form>
        </div>
    );
};

const mapStateToProps = ({ authSliceUser }) => {
    return { authSliceUser }
}

export default connect(mapStateToProps)(NewPoll);
