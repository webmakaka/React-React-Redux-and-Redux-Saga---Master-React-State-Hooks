import {
  default as entriesTypes,
  populateEntries,
  populateEntryDetails,
} from 'actions/entries.actions';
import axios from 'axios';
import { call, fork, put, take } from 'redux-saga/effects';

export function* getAllEntries() {
  console.log('GET ALL ENTRIES');
  yield take(entriesTypes.GET_ENTRIES);
  const { data } = yield call(axios, 'http://localhost:3001/entries');
  yield put(populateEntries(data));
}

export function* getEntryDetails(id) {
  console.log('GET ENTRY DETAILS');
  const { data } = yield call(axios, `http://localhost:3001/values/${id}`);
  yield put(populateEntryDetails(id, data));
}

export function* getAllEntriesDetails() {
  console.log('GET ALL ENTRY DETAILS');
  const { payload } = yield take(entriesTypes.POPULATE_ENTRIES);

  for (let index = 0; index < payload.length; index++) {
    const entry = payload[index];
    console.log(entry);
    yield fork(getEntryDetails, entry.id);
  }
}
