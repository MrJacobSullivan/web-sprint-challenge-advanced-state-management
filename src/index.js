import React from 'react'
import { render } from 'react-dom'

import App from './App'
import './index.css'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import logger from 'redux-logger'
import thunk from 'redux-thunk'

import { reducer } from './reducers'

const middleware = [logger, thunk]
const store = createStore(reducer, applyMiddleware(...middleware))

const { worker } = require('./mocks/browser')
worker.start()

const rootElement = document.getElementById('root')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
