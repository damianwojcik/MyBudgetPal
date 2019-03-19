import { put } from 'redux-saga/effects';

import axios from '../../axios-entries';
import * as actions from '../actions/index';

export function* entriesFetchSaga(action) {
    yield put(actions.fetchEntriesStart());
    try {
        const response = yield axios.get(`/entries/${action.userId}.json?auth=${action.token}`);
        const fetchedEntries = [];
        for (let key in response.data) {
            if (response.data[key]) {
                fetchedEntries.push({
                    ...response.data[key],
                    id: key
                });
            }
        }
        yield put(actions.fetchEntriesSuccess(fetchedEntries));
    } catch (error) {
        yield put(actions.fetchEntriesFail(error));
    }
}

export function* entryAddSaga(action) {
    yield put(actions.entryActionStart());
    try {
        const response = yield axios.post(
            `/entries/${action.userId}.json?auth=${action.token}`,
            action.formData
        );
        yield put(actions.entryActionSuccess(response));
    } catch (error) {
        yield put(actions.entryActionFail(error));
    }
}

export function* entryRemoveSaga(action) {
    yield put(actions.entryActionStart());
    try {
        const response = yield axios.delete(
            `/entries/${action.userId}/${action.entryId}.json?auth=${action.token}`
        );
        yield put(actions.entryActionSuccess(response));
        yield put(actions.fetchEntries(action.userId, action.token));
    } catch (error) {
        yield put(actions.entryActionFail(error));
    }
}
