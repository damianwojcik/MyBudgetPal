import * as actionTypes from './actionTypes';
import axios from '../../axios-entries';

export const fetchEntriesStart = () => {
    return {
        type: actionTypes.FETCH_ENTRIES_START
    };
};

export const fetchEntriesFail = error => {
    return {
        type: actionTypes.FETCH_ENTRIES_FAIL,
        error: error
    };
};

export const fetchEntriesSuccess = entries => {
    return {
        type: actionTypes.FETCH_ENTRIES_SUCCESS,
        entries: entries
    };
};

export const entryActionStart = () => {
    return {
        type: actionTypes.ENTRY_ACTION_START
    };
};

export const entryActionFail = error => {
    return {
        type: actionTypes.ENTRY_ACTION_FAIL,
        error: error
    };
};

export const entryActionSuccess = res => {
    return {
        type: actionTypes.ENTRY_ACTION_SUCCESS,
        entryAction: res !== null
    };
};

export const entriesClear = () => {
    return {
        type: actionTypes.ENTRIES_CLEAR
    };
};

export const removeEntry = (userId, token, entryId) => {
    return dispatch => {
        dispatch(entryActionStart());
        axios
            .delete(`/entries/${userId}/${entryId}.json?auth=${token}`)
            .then(res => {
                dispatch(entryActionSuccess(res));
            })
            .catch(err => {
                dispatch(entryActionFail(err));
            });
    };
};

export const addEntry = (userId, token, formData) => {
    return dispatch => {
        dispatch(entryActionStart());
        axios
            .post(`/entries/${userId}.json?auth=${token}`, formData)
            .then(res => {
                dispatch(entryActionSuccess(res));
            })
            .catch(err => {
                dispatch(entryActionFail(err));
            });
    };
};

export const fetchEntries = (userId, token) => {
    return dispatch => {
        dispatch(fetchEntriesStart());
        axios
            .get(`/entries/${userId}.json?auth=${token}`)
            .then(res => {
                const fetchedEntries = [];
                for (let key in res.data) {
                    if (res.data[key]) {
                        fetchedEntries.push({
                            ...res.data[key],
                            id: key
                        });
                    }
                }
                dispatch(fetchEntriesSuccess(fetchedEntries));
            })
            .catch(err => {
                dispatch(fetchEntriesFail(err));
            });
    };
};
