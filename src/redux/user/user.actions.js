import { SET_CURRENT_USER } from "./user.types";

export const setCurrentUser = user => {
    console.log('action: ', user);
    return {
        type: SET_CURRENT_USER,
        payload: user
    }
}