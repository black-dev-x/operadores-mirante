import axios from 'axios'

export const logarNoSistema = () => {
  return dispatch => {
    console.log('erro')
    const usuario = {}
    axios
      .post('localhost:8080/login', usuario)
      .then(response => dispatch(logarNoSistemaSucesso(response.data)))
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
