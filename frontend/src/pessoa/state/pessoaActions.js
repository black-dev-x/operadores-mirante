import api from '../../configurations/api'
import { push } from 'connected-react-router'

export const ALTERAR_CAMPO_PESSOA = 'ALTERAR CAMPO PESSOA'
export const alterarCampoPessoa = event => ({
  type: ALTERAR_CAMPO_PESSOA,
  payload: event.target
})

export const listarPessoas = _ => {
  return dispatch => {
    api.get('pessoa').then(response => dispatch(listarPessoasSucesso(response.data)))
  }
}

export const detalhesPessoa = pessoa => {
  return dispatch => {
    dispatch(push(`pessoa/${pessoa.id}`))
  }
}

export const navegarTelaOperadores = _ => {
  return dispatch => {
    dispatch(push('operador'))
  }
}

export const LISTAR_PESSOAS_SUCESSO = 'LISTAR PESSOAS SUCESSO'
export const listarPessoasSucesso = pessoas => ({
  type: LISTAR_PESSOAS_SUCESSO,
  payload: pessoas
})

export const cadastrarPessoa = pessoa => {
  return dispatch => {
    api.post('pessoa', pessoa).then(response => dispatch([cadastrarPessoaSucesso(response.data), limparCamposPessoa()]))
  }
}

export const CADASTRAR_PESSOA_SUCESSO = 'CADASTRAR PESSOA SUCESSO'
export const cadastrarPessoaSucesso = pessoa => ({
  type: CADASTRAR_PESSOA_SUCESSO,
  payload: pessoa
})

export const INICIO_EDITAR_PESSOA = 'INICIO EDITAR PESSOA'
export const inicioEditarPessoa = pessoa => ({
  type: INICIO_EDITAR_PESSOA,
  payload: pessoa
})

export const editarPessoa = pessoa => {
  return dispatch => {
    api.put('pessoa', pessoa).then(response => dispatch([editarPessoaSucesso(response.data), limparCamposPessoa()]))
  }
}

export const EDITAR_PESSOA_SUCESSO = 'EDITAR PESSOA SUCESSO'
export const editarPessoaSucesso = pessoa => ({
  type: EDITAR_PESSOA_SUCESSO,
  payload: pessoa
})

export const LIMPAR_CAMPOS_PESSOA = 'LIMPAR CAMPOS PESSOA'
export const limparCamposPessoa = _ => ({
  type: LIMPAR_CAMPOS_PESSOA
})

export const deletarPessoa = pessoa => {
  return dispatch => {
    api.delete(`pessoa/${pessoa.id}`).then(_ => dispatch([deletarPessoaSucesso(pessoa), limparCamposPessoa()]))
  }
}

export const DELETAR_PESSOA_SUCESSO = 'DELETAR PESSOA SUCESSO'
export const deletarPessoaSucesso = pessoa => ({
  type: DELETAR_PESSOA_SUCESSO,
  payload: pessoa
})

export const informacoesPessoa = id => {
  return dispatch => {
    api.get(`/pessoa/${id}`).then(response => dispatch(informacoesPessoaSucesso(response.data)))
    api.get(`/pessoa/telefones/${id}`).then(response => dispatch(informacoesTelefoneSucesso(response.data)))
  }
}

export const INFORMACOES_PESSOA_SUCESSO = 'INFORMACOES PESSOA SUCESSO'
export const informacoesPessoaSucesso = pessoa => ({
  type: INFORMACOES_PESSOA_SUCESSO,
  payload: pessoa
})

export const INFORMACOES_TELEFONE_SUCESSO = 'INFORMACOES TELEFONE SUCESSO'
export const informacoesTelefoneSucesso = telefones => ({
  type: INFORMACOES_TELEFONE_SUCESSO,
  payload: telefones
})

export const deletarTelefone = telefone => {
  return dispatch => {
    api.delete(`/pessoa/telefones/${telefone.id}`).then(_ => dispatch(deletarTelefoneSucesso(telefone)))
  }
}

export const DELETAR_TELEFONE_SUCESSO = 'DELETAR_TELEFONE_SUCESSO'
export const deletarTelefoneSucesso = telefone => ({
  type: DELETAR_TELEFONE_SUCESSO,
  payload: telefone
})

export const adicionarTelefone = (telefone, pessoa) => {
  return dispatch => {
    telefone.pessoa = pessoa
    api.post('/pessoa/telefones', telefone).then(response => dispatch(adicionarTelefoneSucesso(response.data)))
  }
}

export const ADICIONAR_TELEFONE_SUCESSO = 'ADICIONAR TELEFONE SUCESSO'
export const adicionarTelefoneSucesso = telefone => ({
  type: ADICIONAR_TELEFONE_SUCESSO,
  payload: telefone
})

export const ATUALIZAR_CAMPOS_TELEFONE = 'ATUALIZAR_CAMPOS_TELEFONE'
export const atualizarCamposTelefone = event => ({
  type: ATUALIZAR_CAMPOS_TELEFONE,
  payload: event.target
})
