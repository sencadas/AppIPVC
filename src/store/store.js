import {createStore, combineReducers, applyMiddleware} from 'redux';
import AuthReducers from './auth/reducers';
import NavigationReducers from './navigation/reducers';
import HorariosReducers from './horarios/reducers';
import PlanosCurricularesReducers from './planosCurriculares/reducers';
import SettingsReducers from './settings/reducers';

import thunk from 'redux-thunk';

//applyMiddleware - funciona como função asyncrona graças ao thunk
const RootReducers = combineReducers({
  //reduceres
  HorariosReducers,
  AuthReducers,
  NavigationReducers,
  PlanosCurricularesReducers,
  SettingsReducers,
});

export const store = createStore(RootReducers, applyMiddleware(thunk));
