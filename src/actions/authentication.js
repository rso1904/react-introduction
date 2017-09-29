import {
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE
} from './ActionTypes';

import axios from 'axios';

// LOGIN
export function loginRequest(username, password) {
    return (dispatch) => {
        dispatch(login());

        return axios.post('/oauth/token', { 
            username, 
            password,
         })
            .then((response) => {
                dispatch(loginSuccess(username, response.data.token));
            }).catch((error) => {
                dispatch(loginFailure());
            });
    }
}

export function login() {
    return {
        type: AUTH_LOGIN
    };
}

export function loginSuccess(username, token) {
    localStorage.setItem("token", token);
    return {
        type: AUTH_LOGIN_SUCCESS,
        username,
        token
    };
}

export function loginFailure() {
    localStorage.removeItem('token');
    return {
        type: AUTH_LOGIN_FAILURE
    };
}