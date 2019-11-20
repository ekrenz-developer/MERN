import { combineReducers } from 'redux';
import { createStore } from 'redux';
import cities from './cities/reducers';

const store = createStore(
  combineReducers({
    cities
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;