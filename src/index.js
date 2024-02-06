import { ContextProvider } from './contexts/ContextProvider'
import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'

import App from './App'

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById('root')
)
