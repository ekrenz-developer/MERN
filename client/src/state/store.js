import { combineReducers } from 'redux';
import { createStore } from 'redux';
import cities from './cities/reducers';

const store = createStore(
  combineReducers({
    cities
  })
)

export default store;