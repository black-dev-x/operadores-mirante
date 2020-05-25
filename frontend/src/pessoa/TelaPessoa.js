import React from 'react'
import { connect } from 'react-redux'
import { getUser } from '../configurations/auth'
import './TelaPessoa.scss'
import CadastroPessoa from './CadastroPessoa'
import ListaPessoa from './ListaPessoa'
const TelaPessoa = _ => {
  const usuarioLogado = getUser()
  const gerenteOuAdmin = usuarioLogado.perfil === 'ADMIN' || usuarioLogado.perfil === 'GERENTE'
  return (
    <div className="tela-pessoa">
      {gerenteOuAdmin && <CadastroPessoa></CadastroPessoa>}
      <ListaPessoa gerenteOuAdmin={gerenteOuAdmin}></ListaPessoa>
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TelaPessoa)
