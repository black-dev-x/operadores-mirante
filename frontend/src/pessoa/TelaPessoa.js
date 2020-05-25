import React from 'react'
import { connect } from 'react-redux'
import './TelaPessoa.scss'
const TelaPessoa = props => {
  return (
    <div className="tela-pessoa">
      <div className="cadastro-pessoa">
        <label>
          <p>Nome</p>
          <input type="text" value={props.pessoa.nome} />
        </label>
        <label>
          <p>Tipo de Pessoa</p>
          <select value={props.pessoa.tipoPessoa}>
            <option value="FISICA">Pessoa Fisica</option>
            <option value="JURIDICA">Pessoa Juridica</option>
          </select>
        </label>
        <label>
          <p>Documento</p>
          <input type="text" value={props.pessoa.documento} />
        </label>
        <label>
          <p>Data de Nascimento</p>
          <input type="date" value={props.pessoa.dataDeNascimento} />
        </label>
        <label>
          <p>Nome do Pai</p>
          <input type="text" value={props.pessoa.nomeDoPai} />
        </label>
        <label>
          <p>Nome da Mãe</p>
          <input type="text" value={props.pessoa.nomeDaMae} />
        </label>
        <button>Cadastrar Pessoa</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  usuarioLogado: state.login.usuarioLogado,
  pessoa: state.pessoa.pessoa
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TelaPessoa)
