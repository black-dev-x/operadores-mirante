import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { informacoesPessoa, deletarTelefone, adicionarTelefone, atualizarCamposTelefone } from './state/pessoaActions'
import './DetalhesPessoa.scss'
import { FaPlusCircle, FaTrash } from 'react-icons/fa'
import { getUser } from '../configurations/auth'
const DetalhesPessoa = props => {
  const idPessoa = props.match.params.id
  const informacoesPessoa = props.informacoesPessoa
  const usuarioLogado = getUser()
  const gerenteOuAdmin = usuarioLogado.perfil === 'ADMIN' || usuarioLogado.perfil === 'GERENTE'
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
            {gerenteOuAdmin && (
              <div className="input-telefone">
                <input
                  placeholder="DDD"
                  className="ddd"
                  value={props.telefone.ddd}
                  name="ddd"
                  onChange={props.atualizarCamposTelefone}
                  maxLength={3}
                />
                <input placeholder="Numero" value={props.telefone.numero} name="numero" onChange={props.atualizarCamposTelefone} />
                <select value={props.telefone.tipoTelefone} name="tipoTelefone" onChange={props.atualizarCamposTelefone}>
                  <option value="CELULAR">Celular</option>
                  <option value="FIXO">Fixo</option>
                  <option value="COMERCIAL">Comercial</option>
                </select>
                <FaPlusCircle
                  onClick={() => {
                    props.adicionarTelefone(props.telefone, props.pessoa)
                  }}
                ></FaPlusCircle>
              </div>
            )}

            <span>Telefones</span>
            <ul>
              {props.telefones.map(telefone => (
                <li className="telefone-card" key={telefone.id}>
                  <span>
                    ({telefone.ddd}) {telefone.numero} - {telefone.tipoTelefone}
                  </span>
                  {gerenteOuAdmin && (
                    <span>
                      <FaTrash onClick={() => props.deletarTelefone(telefone)}></FaTrash>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  pessoa: state.pessoaInformacoes.pessoa,
  telefones: state.pessoaInformacoes.telefones,
  telefone: state.pessoaInformacoes.telefone
})
const mapDispatchToProps = {
  atualizarCamposTelefone,
  adicionarTelefone,
  deletarTelefone,
  informacoesPessoa
}

export default connect(mapStateToProps, mapDispatchToProps)(DetalhesPessoa)
