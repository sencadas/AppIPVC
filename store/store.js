import {createStore, combineReducers} from 'redux';
import AuthReducers from './auth/reducers';
const RootReducers = combineReducers({
  //reduceres
  AuthReducers,
});
export const store = createStore(RootReducers);
