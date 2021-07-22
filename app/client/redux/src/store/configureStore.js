import entiresReducers from 'reducers/entries.reducers';
import modalsReducer from 'reducers/modals.reducers';
import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = () => {
  return createStore(
    combineReducers({
      entries: entiresReducers,
      modals: modalsReducer
    }),
    composeWithDevTools()
  );
};

export default configureStore;
