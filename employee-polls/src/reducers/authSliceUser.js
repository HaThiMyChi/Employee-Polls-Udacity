import { SET_AUTH_SLICE_USER, SIGNOUT_AUTH_SLICE_USER } from "../constant/constant";

export default function authSliceUser(state = null, action) {
    switch (action.type) {
        case SET_AUTH_SLICE_USER:
            return action.authedUser;
        case SIGNOUT_AUTH_SLICE_USER:
            return null;
        default:
            return state;
    }
}