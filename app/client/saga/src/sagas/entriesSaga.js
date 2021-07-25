import {
  default as entiresTypes,
  default as types,
} from 'actions/entires.actions';
import axios from 'axios';
import { call, put, take } from 'redux-saga/effects';

export function* getAllEntries() {
  yield take(entiresTypes.GET_ENTRIES);
  const result = yield call(axios, 'http://localhost:3001/entries');
  console.log(result);
  yield put({ type: types.POPULATE_ENTRIES, payload: result.data });
}
