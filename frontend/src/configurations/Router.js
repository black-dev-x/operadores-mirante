import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import TelaLogin from '../login/TelaLogin'
import GerenciaOperadores from '../operador/GerenciaOperadores'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={TelaLogin}></Route>
      <Route path="/operador" component={GerenciaOperadores}></Route>
    </Switch>
  </BrowserRouter>
)
