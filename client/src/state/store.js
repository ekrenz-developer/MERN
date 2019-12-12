import { createStore, applyMiddleware , combineReducers , compose } from 'redux';
import thunk from 'redux-thunk';
import cities from './cities/reducers';
import itineraries from './itineraries/reducers';
import user from './user/reducers';
import fetching from './fetching/reducers';

const reducer = combineReducers({
  cities,
  itineraries,
  user,
  fetching
})

const middleware = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(
  reducer,
  middleware
);

export default store;