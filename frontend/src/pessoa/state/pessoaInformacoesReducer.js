import { INFORMACOES_PESSOA_SUCESSO } from './pessoaActions'

const initialState = {
  pessoa: {
    id: null,
    nome: '',
    tipoPessoa: 'FISICA',
    documento: '',
    dataDeNascimento: '',
    nomeDoPai: '',
    nomeDaMae: '',
    telefones: []
  }
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case INFORMACOES_PESSOA_SUCESSO:
      return { ...state, pessoa: payload }
    default:
      return state
  }
}
