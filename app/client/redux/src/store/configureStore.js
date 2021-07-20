import entiresReducers from 'reducers/entries.reducers';
import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = () => {
  return createStore(
    combineReducers({
      entries: entiresReducers,
    }),
    composeWithDevTools()
  );
};

export default configureStore;
