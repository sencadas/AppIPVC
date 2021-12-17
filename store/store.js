import {createStore, combineReducers, applyMiddleware} from 'redux';
import AuthReducers from './auth/reducers';
import NavigationReducers from './navigation/reducers';

import thunk from 'redux-thunk';

//applyMiddleware - funciona como função asyncrona graças ao thunk
import HorariosReducers from './horarios/reducers';

const RootReducers = combineReducers({
  //reduceres
  HorariosReducers,
  AuthReducers,
  NavigationReducers,
});

export const store = createStore(RootReducers, applyMiddleware(thunk));
