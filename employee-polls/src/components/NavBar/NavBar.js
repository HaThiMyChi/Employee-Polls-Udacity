import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogoutAuthedUser } from '../../actions/authSliceUser';

NavBar.propTypes = {
    authSliceUser: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
};

function NavBar(props) {

    const handleLogout = (e) => {
        e.preventDefault();
        props.dispatch(handleLogoutAuthedUser());
    };

    return (
        <nav className='flex justify-center items-center space-x-4'>
            <Link
                to="/"
                className="font-medium px-3 py-2 text_slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
            >
                Home
            </Link>
            <Link
                to="/leaderboard"
                className='font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900'
            >
                Leaderboard
            </Link>
            <Link
                to="/add"
                className='font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900'
            >
                New Poll
            </Link>
            <span
                className='flex items-center font-medium px-3 py-2 text-slate-700'
                data-testid="user-information"
            >
                <img src={props.authSliceUser.avatarURL} alt="User Avatar" className="w-8 h-8 rounded-full mr-2" />
                {props.authSliceUser.name}
            </span>
            <button className='font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900' onClick={handleLogout}>
                Logout
            </button>
        </nav>
    );
}

const mapStateToProps = ({ authSliceUser, users }) => ({
    authSliceUser,
    authedUserId: authSliceUser.id,
    users,
});

export default connect(mapStateToProps)(NavBar);
