import axios from 'axios'
import { push } from 'connected-react-router'

export const logarNoSistema = (username, password) => {
  return dispatch => {
    axios
      .post('login', { username, password })
      .then(response => dispatch([logarNoSistemaSucesso(response.data), push('/operador')]))
      .catch(erro => dispatch(logarNoSistemaErro(erro)))
  }
}

export const LOGAR_NO_SISTEMA_SUCESSO = 'LOGAR NO SISTEMA SUCESSO'
export const logarNoSistemaSucesso = info => ({
  type: LOGAR_NO_SISTEMA_SUCESSO,
  payload: info
})

export const LOGAR_NO_SISTEMA_ERRO = 'LOGAR NO SISTEMA ERRO'
export const logarNoSistemaErro = erro => ({
  type: LOGAR_NO_SISTEMA_ERRO,
  payload: erro
})

export const ALTERAR_CAMPO_LOGIN = 'ALTERAR CAMPO LOGIN'
export const alterarCampoLogin = event => ({
  type: ALTERAR_CAMPO_LOGIN,
  payload: event.target
})
