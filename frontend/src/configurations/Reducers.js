import { combineReducers } from 'redux'
import operadorReducer from '../operador/state/operadorReducer'
import loginReducer from '../login/state/loginReducer'
import { connectRouter } from 'connected-react-router'
import pessoaReducer from '../pessoa/state/pessoaReducer'
import pessoaInformacoesReducer from '../pessoa/state/pessoaInformacoesReducer'

export const Reducers = history =>
  combineReducers({
    router: connectRouter(history),
    operador: operadorReducer,
    login: loginReducer,
    pessoa: pessoaReducer,
    pessoaInformacoes: pessoaInformacoesReducer
  })
