import { takeEvery, all, takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { logoutSaga, checkAuthTimeoutSaga, authUserSaga, authCheckStateSaga } from './auth';
import { entriesFetchSaga, entryAddSaga, entryRemoveSaga } from './entries';

export function* watchAuth() {
    yield all([
        takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
        takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
        takeEvery(actionTypes.AUTH_USER, authUserSaga),
        takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga)
    ]);
}

export function* watchEntries() {
    yield all([
        takeEvery(actionTypes.ENTRIES_FETCH, entriesFetchSaga),
        takeLatest(actionTypes.ENTRY_ADD, entryAddSaga),
        takeLatest(actionTypes.ENTRY_REMOVE, entryRemoveSaga)
    ]);
}
