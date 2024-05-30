import React from 'react';
import PropTypes from 'prop-types';

NotFound.propTypes = {

};

function NotFound(props) {
    return (
        <div>
            <h1 className='text-3xl font-bold mt-9'>404 - Page Not Found</h1>
            <h2 className='text-3xl font-bold mt-9'>Oops! The page you are looking for does not exist.</h2>
        </div>
    );
}

export default NotFound;