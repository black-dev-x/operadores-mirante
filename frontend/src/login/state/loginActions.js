import { push } from 'connected-react-router'
import api from '../../configurations/api'

export const logarNoSistema = (username, password) => {
  return dispatch => {
    api
      .post('login', { username, password })
      .then(response => dispatch([logarNoSistemaSucesso(response.data), push('/home')]))
      .catch(erro => dispatch(logarNoSistemaErro(erro)))
  }
}

export const LOGAR_NO_SISTEMA_SUCESSO = 'LOGAR NO SISTEMA SUCESSO'
export const logarNoSistemaSucesso = usuarioLogado => {
  localStorage.setItem('user', JSON.stringify(usuarioLogado))
  api.defaults.headers.common['Authorization'] = usuarioLogado.jwt
  return {
    type: LOGAR_NO_SISTEMA_SUCESSO,
    payload: usuarioLogado
  }
}

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
