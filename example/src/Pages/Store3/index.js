import React from 'react'
import { StoreContainer } from './styles'
import Store, { Cart } from 'responsive-store-react'

const Store2 = ({ inventory = [] }) => (
  <StoreContainer>
    <Cart>
      <div style={{ width: '40%' }}>
        <h1>Medicine</h1>
        <Store showDirection={false} inventory={inventory[0]} />
      </div>
      <div style={{ width: '40%' }}>
        <h1>Camera</h1>
        <Store showDirection={false} inventory={inventory[1]} />
      </div>
    </Cart>
  </StoreContainer>
)

export default Store2
