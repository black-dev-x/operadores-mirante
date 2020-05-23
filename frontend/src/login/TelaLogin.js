import React from 'react'
import { connect } from 'react-redux'
import './TelaLogin.scss'
import { logarNoSistema, alterarCampoLogin } from './state/loginActions'

const TelaLogin = props => (
  <div className="login-page">
    <div className="login-container">
      <p>Sistema de Gerenciamento</p>
      <input placeholder="usuário" value={props.username} name="username" onChange={props.alterarCampoLogin}></input>
      <input placeholder="senha" type="password" value={props.password} name="password" onChange={props.alterarCampoLogin}></input>
      <button className="sign-in" onClick={props.logarNoSistema}>
        Logar
      </button>
    </div>
  </div>
)

const mapStateToProps = state => ({
  username: state.login.username,
  password: state.login.password,
  errorMessage: state.login.errorMessage
})

const mapDispatchToProps = {
  logarNoSistema,
  alterarCampoLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(TelaLogin)
