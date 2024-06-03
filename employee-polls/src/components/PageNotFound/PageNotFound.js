import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

PageNotFound.propTypes = {

};

function PageNotFound(props) {
    return (
        <div>
            <h1 className='text-3xl font-bold mt-9'>404 - Page Not Found</h1>
            <h2 className='text-3xl font-bold mt-9'>Oops! The page you are looking for does not exist.</h2>
        </div>
    );
}

const mapStateToProps = () => ({});
export default connect(mapStateToProps)(PageNotFound);