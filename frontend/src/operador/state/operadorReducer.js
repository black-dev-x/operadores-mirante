const initialState = {
  operador: {
    nome: '',
    login: '',
    senha: '',
    perfil: 'ANALISTA'
  },
  operadores: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
