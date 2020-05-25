import { LISTAR_PESSOAS_SUCESSO, CADASTRAR_PESSOA_SUCESSO, ALTERAR_CAMPO_PESSOA } from './pessoaActions'

const initialState = {
  pessoa: {
    id: null,
    nome: 'ADA',
    tipoPessoa: 'JURIDICA',
    documento: '2213112',
    dataDeNascimento: '',
    nomeDoPai: 'inferno',
    nomeDaMae: 'olt'
  },
  pessoas: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ALTERAR_CAMPO_PESSOA:
      return { ...state, pessoa: { [action.name]: action.value } }
    case LISTAR_PESSOAS_SUCESSO:
      return { ...state, pessoas: action.payload }
    case CADASTRAR_PESSOA_SUCESSO:
      return { ...state, pessoas: [...state.pessoas, action.payload] }
    default:
      return state
  }
}
