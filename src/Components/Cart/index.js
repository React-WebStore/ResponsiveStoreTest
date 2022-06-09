import React, { useState, useContext, useEffect } from 'react'
import { CartContainer, CartHeader, Checkout } from './styles'

import { contextState } from '../../Services/context'
import CartItem from '../CartItem'
const Cart = ({ checkout = () => {}, height }) => {
  const [isOpen, setOpen] = useState(false)

  const store = useContext(contextState)
  const { cart } = store

  const scrollToBottom = (e, element) => {
    if (e.path.includes(element)) return
    return element.scroll({ top: element.scrollHeight, behavior: 'smooth' })
  }

  useEffect(() => {
    const element = document.getElementById('cart')

    window.addEventListener('click', (e) => scrollToBottom(e, element))
    return window.removeEventListener('click', (e) =>
      scrollToBottom(e, element)
    )
  })
  return (
    <CartContainer id='cart' height={height}>
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
          <Checkout onClick={() => checkout(cart)}>Checkout</Checkout>
        </React.Fragment>
      )}
    </CartContainer>
  )
}

export default Cart
