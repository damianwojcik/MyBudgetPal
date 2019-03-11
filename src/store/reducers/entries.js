import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    entries: [],
    loading: false
};

const fetchEntriesStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const fetchEntriesFail = (state, action) => {
    return updateObject(state, { loading: false });
};

const fetchEntriesSuccess = (state, action) => {
    return updateObject(state, {
        entries: action.entries,
        loading: false
    });
};

const entryRemove = (state, action) => {
    return updateObject(state, { entries: state.entries.filter(item => action.entryId !== item.id) });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ENTRIES_START:
            return fetchEntriesStart(state, action);
        case actionTypes.FETCH_ENTRIES_SUCCESS:
            return fetchEntriesSuccess(state, action);
        case actionTypes.FETCH_ENTRIES_FAIL:
            return fetchEntriesFail(state, action);
        case actionTypes.ENTRY_REMOVE:
            return entryRemove(state, action);
        default:
            return state;
    }
};

export default reducer;
