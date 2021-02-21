import { Provider } from 'jotai'
import React from 'react'
import ReactDOM from 'react-dom'
import { SWRConfig } from 'swr'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig
      value={{
        revalidateOnFocus: false,
      }}
    >
      <Provider>
        <App />
      </Provider>
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById('root')
)
