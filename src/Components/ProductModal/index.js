import React, { useContext, useEffect } from 'react'
import ImageCarousel from '../_common/ImageCarousel'
import { Modal, ProductContainer, TextBox, Remove } from './styles'
import { contextState } from '../../Services/context'

const ProductModal = ({ isOpen = false, setOpen }) => {
  const { modal } = useContext(contextState)
  const { title, price, img } = modal

  const outsideClick = (e) => {
    const container = document.getElementById('product-container')
    if (e.target === container) {
      setOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', (e) => outsideClick(e))

    return document.removeEventListener('click', (e) => outsideClick(e))
  })

  return (
    isOpen && (
      <Modal id='product-container'>
        <ProductContainer>
          <Remove onClick={() => setOpen(false)} />
          <ImageCarousel images={[img]} />
          <TextBox>
            <h1>{title}</h1>
            <h3>{price}</h3>
          </TextBox>
        </ProductContainer>
      </Modal>
    )
  )
}

export default ProductModal
