import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import Store, { history } from './configurations/Store'
import Router from './configurations/Router'
import './reset.css'
import { ConnectedRouter } from 'connected-react-router'

ReactDOM.render(
  <Provider store={Store}>
    <ConnectedRouter history={history}>
      <React.StrictMode>
        <Router />
      </React.StrictMode>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
