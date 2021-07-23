import entiresReducers from 'reducers/entries.reducers';
import modalsReducer from 'reducers/modals.reducers';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddlewre from 'redux-saga';
import { testSaga } from 'sagas/testSaga';

const sagaMiddleware = createSagaMiddlewre();
const middlewares = [sagaMiddleware];

const configureStore = () => {
  const store = createStore(
    combineReducers({
      entries: entiresReducers,
      modals: modalsReducer,
    }),
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(testSaga);
  return store;
};

export default configureStore;
