import { default as entriesTypes } from 'actions/entires.actions';
import axios from 'axios';
import { call, put, take } from 'redux-saga/effects';

export function* deleteEntrySaga() {
  while (true) {
    const { payload } = yield take(entriesTypes.REMOVE_ENTRY);
    yield call(deleteEntrie, payload.id);
    yield put({
      type: entriesTypes.REMOVE_ENTRY_RESULT,
      payload: { id: payload.id },
    });
  }
}

async function deleteEntrie(id) {
  axios.delete(`http://localhost:3001/entries/${id}`);
  axios.delete(`http://localhost:3001/values/${id}`);
  await new Promise((s) => setTimeout(s, 3000));
}
