import { default as entriesTypes } from 'actions/entires.actions';
import axios from 'axios';
import { call, fork, put, take } from 'redux-saga/effects';

export function* getAllEntries() {
  console.log('GET ALL ENTRIES');
  yield take(entriesTypes.GET_ENTRIES);
  const result = yield call(axios, 'http://localhost:3001/entries');
  console.log('result ', result);
  yield put({ type: entriesTypes.POPULATE_ENTRIES, payload: result.data });
}

export function* getEntryDetails(id) {
  console.log('GET ENTRY DETAILS');
  const { data } = yield call(axios, `http://localhost:3001/values/${id}`);
  console.log('data ', data);
  yield put({
    type: entriesTypes.POPULATE_ENTRY_DETAILS,
    payload: { id, entry: data },
  });
}

export function* getAllEntriesDetails() {
  console.log('GET ALL ENTRY DETAILS');
  const { payload } = yield take(entriesTypes.POPULATE_ENTRIES);

  for (let index = 0; index < payload.length; index++) {
    const entry = payload[index];
    console.log(entry);
    fork(getEntryDetails, entry.id);
  }
}
