import React, { useState, useContext, useEffect } from 'react'
import Item from './Components/Item'
import DirectionSelector from './Components/DirectionSelector'
import { contextState } from './Services/context'
import { Wrapper, Direction } from './styles'
import ProductModal from './Components/ProductModal'
const App = ({ height, inventory, dir = 'column', showDirection = true }) => {
  const [direction, setDirection] = useState(dir)
  const [productModal, setProductModal] = useState(false)
  const store = useContext(contextState)
  const { items } = store

  useEffect(() => {
    // testing purposes only
    const arr = new Array(50)
    arr.fill({
      title: 'patrick',
      price: 15000,
      img: 'https://firebasestorage.googleapis.com/v0/b/planup-d79a0.appspot.com/o/logo512.png?alt=media&token=da343b62-b539-4b95-b6d0-97b7144c433a'
    })

    store.dispatch({ type: 'initializeInventory', payload: inventory || arr })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <React.Fragment>
      <Wrapper height={height}>
        {showDirection && <DirectionSelector setDirection={setDirection} />}
        <Direction direction={direction}>
          {items.map((item, i) => (
            <Item {...item} setOpen={setProductModal} key={i} />
          ))}
        </Direction>
      </Wrapper>
      <ProductModal isOpen={productModal} setOpen={setProductModal} />
    </React.Fragment>
  )
}
export default App
