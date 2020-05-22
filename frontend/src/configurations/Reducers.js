import { combineReducers } from 'redux'
import operadorReducer from '../operador/state/operadorReducer'
import loginReducer from '../login/state/loginReducer'

export const Reducers = combineReducers({
  operador: operadorReducer,
  login: loginReducer
})
