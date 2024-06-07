import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

Leaderboard.propTypes = {
    users: PropTypes.object.isRequired,
    userIds: PropTypes.arrayOf(PropTypes.string).isRequired
};

function Leaderboard(props) {
    const { users, userIds } = props;

    const addNumbsToUser = (user, numQanswered, numQasked, sum) => {
        return {
            ...user,
            numQanswered,
            numQasked,
            sum
        };
    }

    let usersArr = [];
    for (let i = 0; i < userIds.length; i++) {
        const user = users[userIds[i]];

        const { questions, answers } = user;
        const numQasked = questions.length;
        const numQanswered = Object.keys(answers).length;
        const sum = numQanswered + numQasked;

        const userWithNums = addNumbsToUser(user, numQanswered, numQasked, sum);

        usersArr.push(userWithNums)
    }

    const sortedArr = usersArr.sort((a, b) => b.sum - a.sum)

    return (
        <div>
            <h1 className='font-bold mt-0 text-3xl text-center'>Leaderboard</h1>

            <table className='text-sm mt-6 table-auto w-full border-collapse'>
                <thead className='table-header-group'>
                    <tr className='table-row'>
                        <th className='border-b border-r border-slate-100 dark:border-slate-700 font-medium p-4 pl-8 align-middle 
                        text-black bg-[rgb(148,163,184)] text-left'>Users</th>
                        <th className='border-b border-r border-slate-100 dark:border-slate-700 font-medium p-4 pl-8 align-middle
                        text-black bg-[rgb(148,163,184)] text-left'>Answered</th>
                        <th className='border-b border-r border-slate-100 dark:border-slate-700 font-medium p-4 pl-8 align-middle
                        text-black bg-[rgb(148,163,184)] text-left'>Created</th>
                    </tr>
                </thead>

                <tbody className='bg-white'>
                    {
                        sortedArr.map((user) => (
                            <tr key={user.id}>
                                <td className='border-b border-r border-slate-100 dark:border-slate-700 p-4 pl-8 text-black flex items-center'>
                                    <img src={user.avatarURL} alt={`${user.name}'s avatar`} className='w-10 h-10 rounded-full mr-4' />
                                    <div>
                                        <span className='font-bold'>{user.name}</span><br />
                                        <span className='text-sm text-slate-500'>{user.id}</span>
                                    </div>
                                </td>
                                <td className='border-b border-r border-slate-100 dark:border-slate-700 p-4 pl-8 text-black'>{user.numQanswered}</td>
                                <td className='border-b border-r border-slate-100 dark:border-slate-700 p-4 pl-8 text-black'>{user.numQasked}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

const mapStateToProps = ({ users }) => {
    const userIds = Object.keys(users)

    return { users, userIds };
}

export default connect(mapStateToProps)(Leaderboard);
