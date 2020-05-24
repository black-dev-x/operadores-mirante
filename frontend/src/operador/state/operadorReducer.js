import {
  CARREGAR_LISTA_OPERADORES_SUCESSO,
  ALTERAR_CAMPO_OPERADOR,
  INICIO_EDITAR_OPERADOR,
  DELETAR_OPERADOR_SUCESSO,
  CADASTRAR_OPERADOR_SUCESSO,
  EDITAR_OPERADOR_SUCESSO,
  LIMPAR_CAMPOS_OPERADORES
} from './operadorActions'

const initialState = {
  operador: {
    id: null,
    nome: '',
    login: '',
    senha: '',
    perfil: 'ANALISTA'
  },
  operadores: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CARREGAR_LISTA_OPERADORES_SUCESSO:
      return { ...state, operadores: action.payload }
    case ALTERAR_CAMPO_OPERADOR:
      return { ...state, operador: { ...state.operador, [action.payload.name]: action.payload.value } }
    case INICIO_EDITAR_OPERADOR:
      return { ...state, operador: action.payload }
    case DELETAR_OPERADOR_SUCESSO:
      return { ...state, operadores: state.operadores.filter(operador => operador.id !== action.payload.id) }
    case CADASTRAR_OPERADOR_SUCESSO:
      return { ...state, operadores: [...state.operadores, action.payload] }
    case EDITAR_OPERADOR_SUCESSO:
      return {
        ...state,
        operadores: state.operadores.map(operador => {
          if (operador.id === action.payload.id) return action.payload
          else return operador
        })
      }
    case LIMPAR_CAMPOS_OPERADORES:
      return {
        ...initialState,
        operadores: state.operadores
      }
    default:
      return state
  }
}
