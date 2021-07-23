import entiresReducers from 'reducers/entries.reducers';
import modalsReducer from 'reducers/modals.reducers';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddlewre from 'redux-saga';

const sagaMiddleware = createSagaMiddlewre();
const middlewares = [sagaMiddleware];

const configureStore = () => {
  return createStore(
    combineReducers({
      entries: entiresReducers,
      modals: modalsReducer,
    }),
    composeWithDevTools(applyMiddleware(...middlewares))
  );
};

export default configureStore;
