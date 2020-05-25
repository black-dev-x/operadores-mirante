import {
  INFORMACOES_PESSOA_SUCESSO,
  INFORMACOES_TELEFONE_SUCESSO,
  DELETAR_TELEFONE_SUCESSO,
  ADICIONAR_TELEFONE_SUCESSO,
  ATUALIZAR_CAMPOS_TELEFONE
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
  telefones: [],
  telefone: {
    ddd: '32',
    numero: '32',
    tipoTelefone: 'FIXO'
  }
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
    default:
      return state
  }
}
