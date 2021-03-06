import React from 'react'
import { StoreContainer } from '../../styles'
import Store, { Cart } from 'responsive-store-react'

const Store2 = ({ inventory = [] }) => (
  <StoreContainer>
    <Cart>
      <h1>Store</h1>
      <Store inventory={[{ name: 'Patrick', price: 15 }]} />
    </Cart>
  </StoreContainer>
)

export default Store2
