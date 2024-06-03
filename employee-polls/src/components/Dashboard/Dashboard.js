import React from 'react';
import PropTypes from 'prop-types';
import authSliceUser from '../../reducers/authSliceUser';
import questions from '../../reducers/questions';
import users from '../../reducers/users';
import { connect } from 'react-redux';
import UserCard from '../UserCard/UserCard';

Dashboard.propTypes = {

};

function Dashboard({ authSliceUser, users, questions }) {
    const answeredQuestion = (q) => (q.optionOne.votes.includes(authSliceUser.id) || q.optionTwo.votes.includes(authSliceUser.id));

    const unansweredQuestion = (q) => (!q.optionOne.votes.includes(authSliceUser.id)
        && !q.optionTwo.votes.includes(authSliceUser.id));

    return (
        <div>
            <h1 className='text-3xl font-bold mt-9 text-center' data-testid="heading">Dashboard</h1>

            <h2 className='text-2xl font-bold mt-6'>New Questions</h2>
            <ul className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {questions
                    .filter(unansweredQuestion)
                    .map((question) => (
                        <li key={question.id}>
                            <UserCard question={question} author={users[question.author]} />
                        </li>
                    ))}
            </ul>

            <h2 className='text-2xl font-bold mt-6'>Answered Questions</h2>
            <ul className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {questions.filter(answeredQuestion).map((question) => (
                    <li key={question.id}>
                        <UserCard question={question} author={users[question.author]} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

const mapStateToProps = ({ authSliceUser, users, questions }) => ({
    authSliceUser,
    users,
    questions: Object.values(questions).sort(
        (a, b) => b.timestamp - a.timestamp
    )
});

export default connect(mapStateToProps)(Dashboard);