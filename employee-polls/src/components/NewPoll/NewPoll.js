import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { handleAddQuestion } from '../../actions/questions';

NewPoll.propTypes = {

};

function NewPoll(props) {
    const { authSliceUser, dispatch } = props;
    const navigate = useNavigate();

    const initialQuestionObject = {
        author: authSliceUser,
        optionOneText: '',
        optionTwoText: '',
    }

    const [question, setQuestion] = useState(initialQuestionObject)
    const [disabled, setDisabled] = useState(true)

    const checkInput = () => {
        if (question.optionOneText !== '' && question.optionTwoText !== '') {
            setDisabled(false)
        }
    }

    useEffect(() => {
        checkInput()
    }, [question])


    const handlePollSubmit = (e) => {
        e.preventDefault();
        dispatch(handleAddQuestion(initialQuestionObject.optionOneText, initialQuestionObject.optionTwoText));
        setDisabled(true)
        navigate("/");
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setQuestion({ ...question, [name]: value })
    }


    return (
        <div>
            <h1 className='text-3xl font-bold mt-9'>New Poll</h1>
            <form onSubmit={handlePollSubmit}>
                <div className='mt-3'>
                    <label
                        className="block text-sm font-medium text-slate-700"
                        htmlFor='firstOption'
                        data-testid="firstOptionLabel">
                        First Option
                    </label>

                    <div className='mt-1'>
                        <input
                            type="text"
                            name="firstOption"
                            id="firstOption"
                            data-testid="firstOption"
                            className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 
                            focus:outline-none focus:border-sky-500 focus:ring-sky-500 block 
                            w-full rounded-md sm:text-sm focus:ring-1 
                            invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 
                            focus:invalid:ring-pink-500 disabled:shadow-none'
                            value={question.optionOneText}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className='mt-3'>
                    <label
                        className="block text-sm font-medium text-slate-700"
                        htmlFor='secondOption'
                        data-testid="secondOptionLabel">
                        Second Option
                    </label>

                    <div className='mt-1'>
                        <input
                            type="text"
                            name="secondOption"
                            id="secondOption"
                            data-testid="secondOption"
                            className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 
                            focus:outline-none focus:border-sky-500 focus:ring-sky-500 block 
                            w-full rounded-md sm:text-sm focus:ring-1 
                            invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 
                            focus:invalid:ring-pink-500 disabled:shadow-none'
                            value={question.optionTwoText}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className='mt-6 text-center'>
                    <button type="submit" disabled={disabled} data-testid="submit-poll" className='bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5
                        rounded-md font-semibold text-white'>Add poll</button>
                </div>
            </form>
        </div>
    );
}

const mapStateToProps = ({ authSliceUser }) => {
    return { authSliceUser }
}

export default connect(mapStateToProps)(NewPoll);