import React from 'react';
import PropTypes from 'prop-types';

Leaderboard.propTypes = {

};

function Leaderboard(props) {
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
                    <tr>
                        <td className='border-b border-r border-slate-100 dark:border-slate-700 p-4 pl-8 text-black'>
                            <span className='font-bold'>Sarah Edo</span><br />
                            <span className='text-sm text-slate-500'>sarahedo</span>
                        </td>
                        <td className='border-b border-r border-slate-100 dark:border-slate-700 p-4 pl-8 text-black'>4</td>
                        <td className='border-b border-r border-slate-100 dark:border-slate-700 p-4 pl-8 text-black'>2</td>
                    </tr>
                    <tr>
                        <td className='border-b border-r border-slate-100 dark:border-slate-700 p-4 pl-8 text-black'>
                            <span className='font-bold'>Mike Tsamis</span><br />
                            <span className='text-sm text-slate-500'>mtsamis</span>
                        </td>
                        <td className='border-b border-r border-slate-100 dark:border-slate-700 p-4 pl-8 text-black'>3</td>
                        <td className='border-b border-r border-slate-100 dark:border-slate-700 p-4 pl-8 text-black'>3</td>
                    </tr>
                    <tr>
                        <td className='border-b border-r border-slate-100 dark:border-slate-700 p-4 pl-8 text-black'>
                            <span className='font-bold'>Tyler McGinnis</span><br />
                            <span className='text-sm text-slate-500'>tylermcginnis</span>
                        </td>
                        <td className='border-b border-r border-slate-100 dark:border-slate-700 p-4 pl-8 text-black'>2</td>
                        <td className='border-b border-r border-slate-100 dark:border-slate-700 p-4 pl-8 text-black'>2</td>
                    </tr>
                    <tr>
                        <td className='border-b border-r border-slate-100 dark:border-slate-700 p-4 pl-8 text-black'>
                            <span className='font-bold'>Zenobia Oshikanlu</span><br />
                            <span className='text-sm text-slate-500'>zoshikanlu</span>
                        </td>
                        <td className='border-b border-r border-slate-100 dark:border-slate-700 p-4 pl-8 text-black'>1</td>
                        <td className='border-b border-r border-slate-100 dark:border-slate-700 p-4 pl-8 text-black'>0</td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
}

export default Leaderboard;