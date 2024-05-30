import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

Nav.propTypes = {

};

function Nav(props) {
    return (
        <nav className='flex justify-center space-x-4'>
            <Link
                to="/"
                className="font-medium px-3 py-2 text_slate-700 rounted-lg hover:bg-slate-100 hover:text-slate-900"
            >
                Home
            </Link>
            <Link
                to="/leaderboard"
                className='font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900'>Leaderboard
            </Link>
            <Link to="/new" className='font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900'>New Poll</Link>
            <span
                className='font-medium px-3 py-2 text-slate-700'
                data-testid="user-information">
                User:
            </span>
            <button className='font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900'>
                Logout
            </button>
        </nav>
    );
}

export default Nav;