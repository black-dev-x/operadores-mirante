import React from 'react'
import { Switch, Route } from 'react-router'
import TelaLogin from '../login/TelaLogin'
import TelaOperadores from '../operador/TelaOperadores'
import TelaPessoa from '../pessoa/TelaPessoa'

export default () => (
  <Switch>
    <Route exact path="/login" component={TelaLogin}></Route>
    <Route exact path="/pessoa" component={TelaPessoa}></Route>
    <Route exact path="/operador" component={TelaOperadores}></Route>
    <Route component={TelaPessoa}></Route>
  </Switch>
)
