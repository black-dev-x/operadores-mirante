import api from '../../configurations/api'

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

export const LISTAR_PESSOAS_SUCESSO = 'LISTAR PESSOAS SUCESSO'
export const listarPessoasSucesso = pessoas => ({
  type: LISTAR_PESSOAS_SUCESSO,
  payload: pessoas
})

export const cadastrarPessoa = pessoa => {
  console.log(pessoa)
  return dispatch => {
    api.post('pessoa', pessoa).then(response => dispatch(cadastrarPessoaSucesso(response.data)))
  }
}

export const CADASTRAR_PESSOA_SUCESSO = 'CADASTRAR PESSOA SUCESSO'
export const cadastrarPessoaSucesso = pessoa => ({
  type: CADASTRAR_PESSOA_SUCESSO,
  payload: pessoa
})
