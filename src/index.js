import React from 'react'
import App from './App'
import { StateProvider } from './Services/context'

function Store({ inventory }) {
  return (
    <React.StrictMode>
      <StateProvider>
        <App inventory={inventory} />
      </StateProvider>
    </React.StrictMode>
  )
}
export default Store
