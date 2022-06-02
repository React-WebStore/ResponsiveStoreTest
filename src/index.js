import React from 'react'
import App from './App'
import { StateProvider } from './Services/context'

function Store(props) {
  return (
    <React.StrictMode>
      <StateProvider>
        <App {...props} />
      </StateProvider>
    </React.StrictMode>
  )
}
export default Store
