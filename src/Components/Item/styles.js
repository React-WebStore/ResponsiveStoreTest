import styled from 'styled-components'

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 3px 3px 7px gray;
`

export const TextBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Image = styled.img`
  min-height: 10rem;
  min-width: 10rem;
  margin: 0.5rem;
`

export const AddToCart = styled.div`
  width: 50px;
  height: 25px;
  background-image: url('https://firebasestorage.googleapis.com/v0/b/planup-d79a0.appspot.com/o/addToCart.png?alt=media&token=76c5b02b-66ac-4479-abb9-f8e0e62700c5');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`
