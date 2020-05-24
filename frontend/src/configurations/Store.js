import { createStore, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import thunkMiddleware from 'redux-thunk'
import multi from 'redux-multi'
import { Reducers } from './Reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

export const history = createBrowserHistory()
export default createStore(Reducers(history), composeWithDevTools(applyMiddleware(thunkMiddleware, multi, routerMiddleware(history))))
