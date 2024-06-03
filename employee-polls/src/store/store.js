import { configureStore } from '@reduxjs/toolkit';
import authSliceUser from '../reducers/authSliceUser';
import users from '../reducers/users';

export const store = configureStore({
    reducer: {
        authSliceUser,
        users
    }
})