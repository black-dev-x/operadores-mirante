import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  carregarListaOperadores,
  alterarCampoOperador,
  inicioEditarOperador,
  deletarOperador,
  cadastrarOperador,
  editarOperador
} from './state/operadorActions'
import { FaEdit, FaTrash, FaUserPlus, FaUserEdit } from 'react-icons/fa'
import './TelaOperadores.scss'
const TelaOperadores = props => {
  const carregarListaOperadores = props.carregarListaOperadores

  useEffect(() => {
    carregarListaOperadores()
  }, [carregarListaOperadores])

  return (
    <div className="tela-operadores">
      <div className="form-operadores">
        {props.operador.id ? <p>Editando Operador</p> : <p>Cadastrar Novo Operador</p>}
        <label>
          Nome:
          <input name="nome" type="text" value={props.operador.nome} onChange={props.alterarCampoOperador} />
        </label>
        <label className={props.operador.id && 'locked'}>
          Login:
          <input name="login" type="text" value={props.operador.login} onChange={props.alterarCampoOperador} readOnly={props.operador.id} />
        </label>
        <label>
          Senha:
          <input name="senha" type="password" value={props.operador.senha} onChange={props.alterarCampoOperador} />
        </label>
        {props.operador.perfil === 'ADMIN' || (
          <select name="perfil" value={props.operador.perfil} onChange={props.alterarCampoOperador}>
            <option value="ANALISTA">ANALISTA</option>
            <option value="GERENTE">GERENTE</option>
          </select>
        )}

        {props.operador.id ? (
          <button onClick={() => props.editarOperador(props.operador)}>
            <span>
              Editar
              <FaUserEdit></FaUserEdit>
            </span>
          </button>
        ) : (
          <button onClick={() => props.cadastrarOperador(props.operador)}>
            <span>
              Cadastrar
              <FaUserPlus></FaUserPlus>
            </span>
          </button>
        )}
      </div>
      <table className="lista-operadores">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Login</th>
            <th>Perfil</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {props.operadores.map(operador => (
            <tr key={operador.id}>
              <td>{operador.nome}</td>
              <td>{operador.login}</td>
              <td>{operador.perfil}</td>
              <td>
                <div className="actions">
                  <FaEdit onClick={() => props.inicioEditarOperador(operador)}></FaEdit>
                  {operador.perfil === 'ADMIN' || <FaTrash onClick={() => props.deletarOperador(operador)}></FaTrash>}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = state => ({
  operadores: state.operador.operadores,
  operador: state.operador.operador
})
const mapDispatchToProps = {
  editarOperador,
  cadastrarOperador,
  deletarOperador,
  alterarCampoOperador,
  inicioEditarOperador,
  carregarListaOperadores
}

export default connect(mapStateToProps, mapDispatchToProps)(TelaOperadores)
