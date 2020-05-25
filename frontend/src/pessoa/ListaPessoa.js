import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { listarPessoas, inicioEditarPessoa, deletarPessoa, detalhesPessoa } from './state/pessoaActions'
import { FaEdit, FaPhone, FaTrash } from 'react-icons/fa'
import { dataFormatada } from '../shared/dateFormat'
const ListaPessoa = props => {
  const listarPessoas = props.listarPessoas

  useEffect(() => {
    listarPessoas()
  }, [listarPessoas])

  return (
    <div className="lista-pessoa">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Tipo Pessoa</th>
            <th>Documento</th>
            <th>Data de Nascimento</th>
            <th>Login do Operador</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {props.pessoas.map(pessoa => (
            <tr key={pessoa.id}>
              <td>{pessoa.nome}</td>
              <td>{pessoa.tipoPessoa}</td>
              <td>{pessoa.documento}</td>
              <td>{dataFormatada(new Date(pessoa.dataDeNascimento))}</td>
              <td>{pessoa.loginDoOperador}</td>
              <td>
                <div className="actions">
                  {props.gerenteOuAdmin && (
                    <>
                      <FaEdit onClick={() => props.inicioEditarPessoa(pessoa)}></FaEdit>
                      <FaTrash onClick={() => props.deletarPessoa(pessoa)}></FaTrash>
                    </>
                  )}
                  <FaPhone onClick={() => props.detalhesPessoa(pessoa)}></FaPhone>
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
  pessoas: state.pessoa.pessoas
})
const mapDispatchToProps = {
  detalhesPessoa,
  deletarPessoa,
  inicioEditarPessoa,
  listarPessoas
}

export default connect(mapStateToProps, mapDispatchToProps)(ListaPessoa)
