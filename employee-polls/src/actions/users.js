import { RECEIVE_USERS } from "../constant/constant";

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    };
}