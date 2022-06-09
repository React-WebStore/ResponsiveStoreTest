import React from 'react'
import { StoreContainer } from './styles'
import Store from 'responsive-store-react'

const Store2 = ({ inventory = [] }) => (
  <StoreContainer>
    <div style={{ width: '40%' }}>
      <h1>Medicine</h1>
      <Store showDirection={false} inventory={inventory[0]} />
    </div>
    <div style={{ width: '40%' }}>
      <h1>Camera</h1>
      <Store showDirection={false} inventory={inventory[1]} />
    </div>
  </StoreContainer>
)

export default Store2
