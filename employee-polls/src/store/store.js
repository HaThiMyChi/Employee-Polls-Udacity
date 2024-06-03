import { configureStore } from '@reduxjs/toolkit';
import authSliceUser from '../reducers/authSliceUser';
import users from '../reducers/users';
import questions from '../reducers/questions';

export const store = configureStore({
    reducer: {
        authSliceUser,
        users,
        questions
    }
})