import React from 'react';
import PropTypes from 'prop-types';

PollPage.propTypes = {

};

function PollPage(props) {
    return (
        <div>
            <h1 className='text-3xl font-bold mt-9'>Poll by</h1>

            <div className='flex justify-center'>
                <img className="h-24 w-24" src="" alt="Profile"></img>
            </div>

            <div className='flex justify-center'>
                <h2 className='text-2xl font-bold mt-6'>Would You Rather</h2>
            </div>

            <div className='grid grid-cols-2 gap-4 mt-4'>
                <button>
                    <div>
                        <p className='font-bold mb-2'></p>
                        <p className='underline underline-offset-4 mb-3'>Click</p>
                        <p className="text-xs">Votes:</p>
                    </div>
                </button>

                <button>
                    <div>
                        <p className='font-bold mb-2'></p>
                        <p className='underline underline-offset-4 mb-3'>Click</p>
                        <p className="text-xs">Votes:</p>
                    </div>
                </button>

            </div>
        </div>
    );
}

export default PollPage;