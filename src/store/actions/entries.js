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

export const removeEntry = id => {
    axios
        .delete(`/entries/${id}.json`)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.error(err);
        });

    return {
        type: actionTypes.ENTRY_REMOVE,
        entryId: id
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
