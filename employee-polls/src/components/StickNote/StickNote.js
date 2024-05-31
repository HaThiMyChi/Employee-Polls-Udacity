import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

StickNote.propTypes = {

};

function StickNote(props) {
    return (
        // <Link></Link>
        <div className='m-3 p-2 rounded-xl shadow-md hover:shadow-xl
            transition bg-zinc-300 max-w-sm mx-auto
            flex items-center space-x-4'>
            <div className='shrink-0'>
                <img className='h-12 w-12' src="" alt="Author"></img>
            </div>
            <div>
                <div className='text-xl font-medium text-black'>mtssannn</div>
                <p className='italic text-xs'>2024-5-31</p>
                <p className='underline underline-offset-4'>Show</p>
            </div>
        </div>
    );
}

export default StickNote;