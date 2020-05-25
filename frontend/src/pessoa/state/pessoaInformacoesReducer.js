import {
  INFORMACOES_PESSOA_SUCESSO,
  INFORMACOES_TELEFONE_SUCESSO,
  DELETAR_TELEFONE_SUCESSO,
  ADICIONAR_TELEFONE_SUCESSO,
  ATUALIZAR_CAMPOS_TELEFONE,
  LIMPAR_CAMPOS_INFORMACOES_PESSOA
} from './pessoaActions'

const telefoneInicial = {
  ddd: '',
  numero: '',
  tipoTelefone: 'FIXO'
}
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
  telefones: [],
  telefone: telefoneInicial
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case INFORMACOES_PESSOA_SUCESSO:
      return { ...state, pessoa: payload }
    case INFORMACOES_TELEFONE_SUCESSO:
      return { ...state, telefones: payload }
    case DELETAR_TELEFONE_SUCESSO:
      return { ...state, telefones: state.telefones.filter(telefone => telefone.id !== payload.id) }
    case ADICIONAR_TELEFONE_SUCESSO:
      return { ...state, telefones: [...state.telefones, payload] }
    case ATUALIZAR_CAMPOS_TELEFONE:
      return { ...state, telefone: { ...state.telefone, [payload.name]: payload.value } }
    case LIMPAR_CAMPOS_INFORMACOES_PESSOA:
      return { ...state, telefone: telefoneInicial }
    default:
      return state
  }
}
