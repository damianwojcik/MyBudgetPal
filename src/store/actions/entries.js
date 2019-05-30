import * as actionTypes from './actionTypes';

export const fetchEntriesStart = () => {
  return {
    type: actionTypes.FETCH_ENTRIES_START,
  };
};

export const fetchEntriesFail = error => {
  return {
    type: actionTypes.FETCH_ENTRIES_FAIL,
    error: error,
  };
};

export const fetchEntriesSuccess = entries => {
  return {
    type: actionTypes.FETCH_ENTRIES_SUCCESS,
    entries: entries,
  };
};

export const entryActionStart = () => {
  return {
    type: actionTypes.ENTRY_ACTION_START,
  };
};

export const entryActionFail = error => {
  return {
    type: actionTypes.ENTRY_ACTION_FAIL,
    error: error,
  };
};

export const entryActionSuccess = res => {
  return {
    type: actionTypes.ENTRY_ACTION_SUCCESS,
    entryAction: res !== null,
  };
};

export const entriesClear = () => {
  return {
    type: actionTypes.ENTRIES_CLEAR,
  };
};

export const removeEntry = (userId, token, entryId) => {
  return {
    type: actionTypes.ENTRY_REMOVE,
    userId: userId,
    token: token,
    entryId: entryId,
  };
};

export const addEntry = (userId, token, formData) => {
  return {
    type: actionTypes.ENTRY_ADD,
    userId: userId,
    token: token,
    formData: formData,
  };
};

export const fetchEntries = (userId, token) => {
  return {
    type: actionTypes.ENTRIES_FETCH,
    userId: userId,
    token: token,
  };
};
