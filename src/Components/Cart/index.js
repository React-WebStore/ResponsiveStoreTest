import React, { useState, useContext, useEffect } from 'react'
import { CartContainer, CartHeader } from './styles'

import { contextState } from '../../Services/context'
import CartItem from '../CartItem'
const Cart = () => {
  const [isOpen, setOpen] = useState(false)

  const store = useContext(contextState)
  const { cart } = store

  const scrollToBottom = (e, element) => {
    if (e.path.includes(element)) return
    return element.scroll({ top: element.scrollHeight, behavior: 'smooth' })
  }

  useEffect(() => {
    const element = document.getElementsByClassName('sc-gKXOVf eGOJaV')[0]
    window.addEventListener('click', (e) => scrollToBottom(e, element))
    return window.removeEventListener('click', (e) =>
      scrollToBottom(e, element)
    )
  })
  return (
    <CartContainer>
      <CartHeader onClick={() => setOpen(!isOpen)}>
        {isOpen ? (
          <h3>Your Items</h3>
        ) : (
          <img
            src='https://firebasestorage.googleapis.com/v0/b/planup-d79a0.appspot.com/o/cart.png?alt=media&token=107d84aa-dfe5-452c-95ef-5072ba56c07f'
            width='30rem'
            alt='cart'
          />
        )}
      </CartHeader>
      {isOpen && (
        <React.Fragment>
          {cart.map((item) => (
            <CartItem {...item} />
          ))}
        </React.Fragment>
      )}
    </CartContainer>
  )
}

export default Cart
