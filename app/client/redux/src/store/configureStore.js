import entiresReducers from 'reducers/entries.reducers';
import { combineReducers, createStore } from 'redux';

const configureStore = () => {
  return createStore(
    combineReducers({
      erntries: entiresReducers,
    })
  );
};

export default configureStore;
