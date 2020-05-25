import React from 'react'
import { connect } from 'react-redux'
import { cadastrarPessoa, alterarCampoPessoa } from './state/pessoaActions'

const CadastroPessoa = props => {
  return (
    <div className="cadastro-pessoa">
      <label>
        <p>Nome</p>
        <input type="text" name="nome" value={props.pessoa.nome} onChange={props.alterarCampoPessoa} />
      </label>
      <label>
        <p>Tipo de Pessoa</p>
        <select value={props.pessoa.tipoPessoa} name="tipoPessoa" onChange={props.alterarCampoPessoa}>
          <option value="FISICA">Pessoa Fisica</option>
          <option value="JURIDICA">Pessoa Juridica</option>
        </select>
      </label>
      <label>
        <p>Documento</p>
        <input type="text" name="documento" value={props.pessoa.documento} onChange={props.alterarCampoPessoa} />
      </label>
      <label>
        <p>Data de Nascimento</p>
        <input type="text" name="dataDeNascimento" value={props.pessoa.dataDeNascimento} onChange={props.alterarCampoPessoa} />
      </label>
      <label>
        <p>Nome do Pai</p>
        <input type="text" name="nomeDoPai" value={props.pessoa.nomeDoPai} onChange={props.alterarCampoPessoa} />
      </label>
      <label>
        <p>Nome da Mãe</p>
        <input type="text" name="nomeDaMae" value={props.pessoa.nomeDaMae} onChange={props.alterarCampoPessoa} />
      </label>
      <button onClick={() => props.cadastrarPessoa(props.pessoa)}>Cadastrar Pessoa</button>
    </div>
  )
}

const mapStateToProps = state => ({
  usuarioLogado: state.login.usuarioLogado,
  pessoa: state.pessoa.pessoa
})
const mapDispatchToProps = {
  alterarCampoPessoa,
  cadastrarPessoa
}

export default connect(mapStateToProps, mapDispatchToProps)(CadastroPessoa)
