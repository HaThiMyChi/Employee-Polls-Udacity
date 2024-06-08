import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

UserCard.propTypes = {
    question: PropTypes.object.isRequired,
    author: PropTypes.object.isRequired,
    error: PropTypes.string, // Prop để nhận thông báo lỗi từ Redux store
};

function UserCard(props) {
    const { question, author, error } = props;

    // Xử lý lỗi: Nếu có lỗi, hiển thị thông báo lỗi
    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }

    return (
        <Link to={'questions/' + question.id}>
            <div className='m-3 p-2 rounded-xl shadow-md hover:shadow-xl
                transition bg-zinc-300 max-w-sm mx-auto
                flex items-center space-x-4'>
                <div className='shrink-0'>
                    <img className='h-12 w-12' src={author?.avatarURL} alt="Author" />
                </div>
                <div>
                    <div className='text-xl font-medium text-black'>{question.author}</div>
                    <p className='text-xs italic'>{new Date(question.timestamp).toDateString()}</p>
                    <p className='underline underline-offset-4'>Show</p>
                </div>
            </div>
        </Link>
    );
}

const mapStateToProps = (state) => ({
    error: state.error, // Lấy thông báo lỗi từ Redux store
});

export default connect(mapStateToProps)(UserCard);