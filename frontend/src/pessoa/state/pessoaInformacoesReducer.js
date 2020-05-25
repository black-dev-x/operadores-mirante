import { INFORMACOES_PESSOA_SUCESSO, INFORMACOES_TELEFONE_SUCESSO } from './pessoaActions'

const initialState = {
  pessoa: {
    id: null,
    nome: '',
    tipoPessoa: 'FISICA',
    documento: '',
    dataDeNascimento: '',
    nomeDoPai: '',
    nomeDaMae: ''
  },
  telefones: [
    {
      id: 1,
      ddd: 66,
      numero: '9289312'
    }
  ]
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case INFORMACOES_PESSOA_SUCESSO:
      return { ...state, pessoa: payload }
    case INFORMACOES_TELEFONE_SUCESSO:
      return { ...state, telefones: payload }
    default:
      return state
  }
}
