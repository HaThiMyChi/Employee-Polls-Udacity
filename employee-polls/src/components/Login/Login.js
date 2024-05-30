import React from 'react';
import PropTypes from 'prop-types';

Login.propTypes = {

};

function Login(props) {
    return (
        <div>
            <h1 className='font-bold mt-9 text-3xl  text-center' data-testid="login-heading">
                Login
            </h1>
            <form>
                <div>
                    <label htmlFor='username' className='text-sm font-medium block text-slate-700'>Username</label>
                    <div className='mt-1'>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            data-testid="username"
                            className='px-3 py-2 border bg-white shadow-sm border-slate-300 placeholder-slate-400 
                                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 
                                focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1
                                invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none'
                        />
                    </div>
                </div>

                <div className='mt-6'>
                    <label htmlFor='password' className='text-sm font-medium block text-slate-700'>Password</label>
                    <div className='mt-1'>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            data-testid="password"
                            className='px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 
                            focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 
                            invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none'
                        />
                    </div>
                </div>
                <div className='mt-6 text-center'>
                    <button className='bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 font-semibold rounded-md text-white' type="submit" data-testid="submit">Login</button>
                </div>
            </form>
        </div>

    );
}

export default Login;