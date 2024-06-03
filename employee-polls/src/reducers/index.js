import { combineReducers } from "@reduxjs/toolkit";
import authSliceUser from "./authSliceUser";
import users from "./users";
import questions from "./questions";

export default combineReducers({
    authSliceUser,
    users,
    questions
})