import axios from 'axios';

import * as actionTypes from './actionTypes';

const FIREBASE_APIKEY = process.env.REACT_APP_FIREBASE_APIKEY;

export const authStart = () => {
    console.log(FIREBASE_APIKEY);
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = authData => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    };
};

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        axios
            .post(
                'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' + FIREBASE_APIKEY,
                authData
            )
            .then(response => {
                console.log(response);
                dispatch(authSuccess(response.data));
            })
            .catch(error => {
                console.log(error);
                dispatch(authFail(error));
            });
    };
};
