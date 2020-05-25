import React from 'react'
import { connect } from 'react-redux'
import { getUser } from '../configurations/auth'
import './TelaPessoa.scss'
import CadastroPessoa from './CadastroPessoa'
import ListaPessoa from './ListaPessoa'
import { navegarTelaOperadores } from './state/pessoaActions'
const TelaPessoa = props => {
  const usuarioLogado = getUser()
  const gerenteOuAdmin = usuarioLogado.perfil === 'ADMIN' || usuarioLogado.perfil === 'GERENTE'
  const admin = usuarioLogado.perfil === 'ADMIN'
  return (
    <div className="tela-pessoa">
      {admin && (
        <button onClick={props.navegarTelaOperadores} className="painel-admin">
          Painel Admin
        </button>
      )}
      {gerenteOuAdmin && <CadastroPessoa></CadastroPessoa>}
      <ListaPessoa gerenteOuAdmin={gerenteOuAdmin}></ListaPessoa>
    </div>
  )
}

const mapStateToProps = state => ({})
const mapDispatchToProps = {
  navegarTelaOperadores
}

export default connect(mapStateToProps, mapDispatchToProps)(TelaPessoa)
