import React from 'react'
import { StoreContainer } from '../../styles'
import Store from 'responsive-store-react'

const Store2 = ({ inventory = [] }) => (
  <StoreContainer>
    <h1>Store</h1>
    <Store inventory={inventory} dir='row' />
  </StoreContainer>
)

export default Store2
