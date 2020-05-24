import React from 'react'
import { Switch, Route } from 'react-router'
import TelaLogin from '../login/TelaLogin'
import TelaOperadores from '../operador/TelaOperadores'

export default () => (
  <Switch>
    <Route exact path="/login" component={TelaLogin}></Route>
    <Route exact path="/operador" component={TelaOperadores}></Route>
  </Switch>
)
