const initialState = {
  pessoa: {
    id: null,
    nome: 'ADA',
    tipoPessoa: 'JURIDICA',
    documento: '2213112',
    dataDeNascimento: '1988-06-17',
    nomeDoPai: 'inferno',
    nomeDaMae: 'olt'
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
