import api from '../../configurations/api'
import { push } from 'connected-react-router'

export const carregarListaOperadores = () => {
  return dispatch => {
    api.get('operador').then(response => dispatch(carregarListaOperadoresSucesso(response.data)))
  }
}

export const LIMPAR_CAMPOS_OPERADORES = 'LIMPAR CAMPOS OPERADORES'
export const limparCamposOperadores = _ => ({
  type: LIMPAR_CAMPOS_OPERADORES
})

export const CARREGAR_LISTA_OPERADORES_SUCESSO = 'CARREGAR LISTA OPERADORES SUCESSO'
export const carregarListaOperadoresSucesso = operadores => ({
  type: CARREGAR_LISTA_OPERADORES_SUCESSO,
  payload: operadores
})

export const INICIO_EDITAR_OPERADOR = 'INICIO EDITAR OPERADOR'
export const inicioEditarOperador = operador => ({
  type: INICIO_EDITAR_OPERADOR,
  payload: operador
})

export const ALTERAR_CAMPO_OPERADOR = 'ALTERAR CAMPO OPERADOR'
export const alterarCampoOperador = event => ({
  type: ALTERAR_CAMPO_OPERADOR,
  payload: event.target
})

export const deletarOperador = operador => {
  return dispatch => {
    api.delete(`operador/${operador.id}`).then(_ => dispatch(deletarOperadorSucesso(operador)))
  }
}

export const DELETAR_OPERADOR_SUCESSO = 'DELETAR OPERADOR SUCESSO'
export const deletarOperadorSucesso = operador => ({
  type: DELETAR_OPERADOR_SUCESSO,
  payload: operador
})

export const cadastrarOperador = operador => {
  return dispatch => {
    api.post('operador', operador).then(response => dispatch([cadastrarOperadorSucesso(response.data), limparCamposOperadores()]))
  }
}

export const editarOperador = operador => {
  return dispatch => {
    api.put('operador', operador).then(response => dispatch([editarOperadorSucesso(response.data), limparCamposOperadores()]))
  }
}

export const EDITAR_OPERADOR_SUCESSO = 'EDITAR_OPERADOR_SUCESSO'
export const editarOperadorSucesso = operador => ({
  type: EDITAR_OPERADOR_SUCESSO,
  payload: operador
})

export const CADASTRAR_OPERADOR_SUCESSO = 'CADASTRAR_OPERADOR_SUCESSO'
export const cadastrarOperadorSucesso = operador => ({
  type: CADASTRAR_OPERADOR_SUCESSO,
  payload: operador
})

export const navegarTelaPessoas = _ => {
  return dispatch => {
    dispatch(push('pessoa'))
  }
}
