import { LOGAR_NO_SISTEMA_SUCESSO, ALTERAR_CAMPO_LOGIN, LOGAR_NO_SISTEMA_ERRO } from './loginActions'

const initialState = {
  username: '',
  password: '',
  errorMessage: '',
  usuarioLogado: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGAR_NO_SISTEMA_SUCESSO:
      return initialState
    case LOGAR_NO_SISTEMA_ERRO:
      return { ...state, errorMessage: action.payload.message }
    case ALTERAR_CAMPO_LOGIN:
      return { ...state, [action.payload.name]: action.payload.value }
    default:
      return state
  }
}
