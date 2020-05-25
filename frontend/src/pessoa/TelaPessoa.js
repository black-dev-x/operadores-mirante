import React from 'react'
import { connect } from 'react-redux'
import './TelaPessoa.scss'
import CadastroPessoa from './CadastroPessoa'
import ListaPessoa from './ListaPessoa'
const TelaPessoa = _ => {
  return (
    <div className="tela-pessoa">
      <CadastroPessoa></CadastroPessoa>
      <ListaPessoa></ListaPessoa>
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TelaPessoa)
