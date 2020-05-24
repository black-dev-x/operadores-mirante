import React from 'react'
import { Switch, Route } from 'react-router'
import TelaLogin from '../login/TelaLogin'
import GerenciaOperadores from '../operador/GerenciaOperadores'

export default () => (
  <Switch>
    <Route exact path="/login" component={TelaLogin}></Route>
    <Route exact path="/operador" component={GerenciaOperadores}></Route>
    <Route component={GerenciaOperadores}></Route>
  </Switch>
)
