import React from 'react'
import { StoreContainer } from '../../styles'
import Store, { Cart } from 'responsive-store-react'
const Store1 = ({ inventory = {} }) => {
  return (
    <StoreContainer>
      <Cart
        checkout={() => {
          console.log('hello World')
        }}
      >
        <h1>Medicine</h1>
        <Store
          dir='row'
          height={30}
          showDirection={false}
          inventory={inventory[0]}
        />
        <h1>Camera</h1>
        <Store
          dir='row'
          height={30}
          showDirection={false}
          inventory={inventory[1]}
        />
        <h1>Alcohol</h1>
        <Store
          dir='row'
          height={30}
          showDirection={false}
          inventory={inventory[2]}
        />
      </Cart>
    </StoreContainer>
  )
}

export default Store1
