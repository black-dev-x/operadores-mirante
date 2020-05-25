import {
  LISTAR_PESSOAS_SUCESSO,
  CADASTRAR_PESSOA_SUCESSO,
  ALTERAR_CAMPO_PESSOA,
  INICIO_EDITAR_PESSOA,
  DELETAR_PESSOA_SUCESSO,
  LIMPAR_CAMPOS_PESSOA,
  EDITAR_PESSOA_SUCESSO
} from './pessoaActions'

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
  pessoas: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ALTERAR_CAMPO_PESSOA:
      return { ...state, pessoa: { ...state.pessoa, [action.payload.name]: action.payload.value } }
    case LISTAR_PESSOAS_SUCESSO:
      return { ...state, pessoas: action.payload }
    case CADASTRAR_PESSOA_SUCESSO:
      return { ...state, pessoas: [...state.pessoas, action.payload] }
    case INICIO_EDITAR_PESSOA:
      return { ...state, pessoa: action.payload }
    case DELETAR_PESSOA_SUCESSO:
      return { ...state, pessoas: state.pessoas.filter(pessoa => pessoa.id !== action.payload.id) }
    case EDITAR_PESSOA_SUCESSO:
      return {
        ...state,
        pessoas: state.pessoas.map(pessoa => {
          if (pessoa.id === action.payload.id) return action.payload
          else return pessoa
        })
      }
    case LIMPAR_CAMPOS_PESSOA:
      return { ...initialState, pessoas: state.pessoas }
    default:
      return state
  }
}
