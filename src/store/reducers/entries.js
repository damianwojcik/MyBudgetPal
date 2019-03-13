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

const entryActionStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const entryActionFail = (state, action) => {
    return updateObject(state, { loading: false });
};

const entryActionSuccess = (state, action) => {
    return updateObject(state, {
        entry: action.entry,
        loading: false
    });
};

const entriesClear = (state, action) => {
    return updateObject(state, { entries: [] });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ENTRIES_START:
            return fetchEntriesStart(state, action);
        case actionTypes.FETCH_ENTRIES_SUCCESS:
            return fetchEntriesSuccess(state, action);
        case actionTypes.FETCH_ENTRIES_FAIL:
            return fetchEntriesFail(state, action);
        case actionTypes.ENTRY_ACTION_START:
            return entryActionStart(state, action);
        case actionTypes.ENTRY_ACTION_SUCCESS:
            return entryActionSuccess(state, action);
        case actionTypes.ENTRY_ACTION_FAIL:
            return entryActionFail(state, action);
        case actionTypes.ENTRIES_CLEAR:
            return entriesClear(state, action);
        default:
            return state;
    }
};

export default reducer;
