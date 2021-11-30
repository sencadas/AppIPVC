import {createStore, combineReducers} from 'redux';
import AuthReducers from './reducers';
const RootReducers = combineReducers({
  //reduceres
  AuthReducers,
});
export const store = createStore(RootReducers);
