import React from 'react'
import { Switch, Route } from 'react-router'
import TelaLogin from '../login/TelaLogin'
import TelaOperadores from '../operador/TelaOperadores'
import TelaPessoa from '../pessoa/TelaPessoa'
import { PrivateRoute } from './PrivateRoute'

export default () => (
  <Switch>
    <Route exact path="/login" component={TelaLogin}></Route>
    <PrivateRoute exact path="/pessoa" component={TelaPessoa}></PrivateRoute>
    <PrivateRoute exact path="/operador" component={TelaOperadores}></PrivateRoute>
    <PrivateRoute component={TelaPessoa}></PrivateRoute>
  </Switch>
)
