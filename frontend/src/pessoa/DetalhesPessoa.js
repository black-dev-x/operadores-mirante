import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { informacoesPessoa } from './state/pessoaActions'
import './DetalhesPessoa.scss'
const DetalhesPessoa = props => {
  const idPessoa = props.match.params.id
  const informacoesPessoa = props.informacoesPessoa

  useEffect(() => {
    informacoesPessoa(idPessoa)
  }, [informacoesPessoa, idPessoa])

  return (
    <div className="background-informacoes-pessoais">
      <div className="informacoes-pessoa">
        <p>Informações detalhadas de {props.pessoa.nome}</p>
        <ul>
          <li>
            <span>Id:</span>
            {props.pessoa.id}
          </li>
          <li>
            <span>Nome:</span>
            {props.pessoa.nome}
          </li>
          <li>
            <span>Documento:</span>
            {props.pessoa.documento}
          </li>
          <li>
            <span>Data de Nascimento:</span>
            {props.pessoa.dataDeNascimento}
          </li>
          <li>
            <span>Nome da Mãe:</span>
            {props.pessoa.nomeDaMae}
          </li>
          <li>
            <span>Nome do Pai:</span>
            {props.pessoa.nomeDoPai}
          </li>
          <li>
            <span>Login do Operador:</span>
            {props.pessoa.loginDoOperador}
          </li>
          <li>
            <span>Tipo de Pessoa:</span>
            {props.pessoa.tipoPessoa}
          </li>
          <li>
            <span>Telefones</span>
            <ul>
              <li>921391203</li>
              <li>29301832138</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  pessoa: state.pessoaInformacoes.pessoa
})
const mapDispatchToProps = {
  informacoesPessoa
}

export default connect(mapStateToProps, mapDispatchToProps)(DetalhesPessoa)
