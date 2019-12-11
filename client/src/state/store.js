import { createStore, applyMiddleware , combineReducers } from 'redux';
import thunk from 'redux-thunk';
import cities from './cities/reducers';
import itineraries from './itineraries/reducers';
import users from './users/reducers';

const reducer = combineReducers({
  cities,
  itineraries,
  users
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store;