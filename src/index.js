import React from 'react'
import App from './App'
import { StateProvider } from './Services/context'
import { Cart } from './Services/cart'
function Store(props) {
  console.log(props)
  return (
    <React.StrictMode>
      <StateProvider>
        <App {...props} />
      </StateProvider>
    </React.StrictMode>
  )
}
export default Store

export { Cart }
