import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import multi from 'redux-multi'
import { Reducers } from './Reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

export default createStore(Reducers, composeWithDevTools(applyMiddleware(thunkMiddleware, multi)))
