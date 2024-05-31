import { SIGNOUT_AUTH_SLICE_USER, SET_AUTH_SLICE_USER } from "../constant/constant";

export function setAuthSliceUser(authedUser) {
    return {
        type: SET_AUTH_SLICE_USER,
        authedUser
    };
}

export function signoutAuthSliceUser() {
    return {
        type: SIGNOUT_AUTH_SLICE_USER
    };
}

export function handleLoginUser(username, password) {
    return (dispatch, getState) => {
        console.log('dispatch', dispatch)
        console.log('getState', getState)
        const { users } = getState();

        const user = Object.values(users).find((user) => user.id === username && user.password === password);

        if (!user) {
            return dispatch(setAuthSliceUser(user));
        }
    }
}
