import {createStore, combineReducers} from 'redux';
import AuthReducers from './auth/reducers';
import HorariosReducers from './horarios/reducers';

const RootReducers = combineReducers({
  //reduceres
  HorariosReducers,
  AuthReducers,
});
export const store = createStore(RootReducers);
