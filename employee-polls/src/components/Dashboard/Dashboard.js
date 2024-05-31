import React from 'react';
import PropTypes from 'prop-types';

Dashboard.propTypes = {

};

function Dashboard(props) {
    return (
        <div>
            <h1 className='text-3xl font-bold mt-9' data-testid="heading">Dashboard</h1>

            <h2 className='text-2xl font-bold mt-6'>New Questions</h2>
            <ul className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <li>AAAAAAAAAA</li>
            </ul>

            <h2 className='text-2xl font-bold mt-6'>Answered Questions</h2>
            <ul className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <li>AAAAAAAAAA</li>
            </ul>
        </div>
    );
}

export default Dashboard;