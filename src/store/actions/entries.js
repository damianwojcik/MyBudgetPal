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

export const fetchEntries = () => {
    return dispatch => {
        dispatch(fetchEntriesStart());
        axios
            .get('/entries.json')
            .then(res => {
                const fetchedEntries = [];
                for (let key in res.data) {
                    fetchedEntries.push({
                        ...res.data[key],
                        id: key
                    });
                }
                dispatch(fetchEntriesSuccess(fetchedEntries));
            })
            .catch(err => {
                dispatch(fetchEntriesFail(err));
            });
    };
};
