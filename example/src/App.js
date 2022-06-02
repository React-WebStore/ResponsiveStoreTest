import React from 'react'

import Store from 'responsive-store-react'
import 'responsive-store-react/dist/index.css'

const App = () => {
  const arr1 = new Array(10)
  const arr2 = new Array(10)
  const arr3 = new Array(10)

  arr1.fill({ title: 'bottle', price: 10, img: 'Hero-hottoddy_.jpeg' })
  arr2.fill({
    title: 'camera',
    price: 1200,
    img: 'diy-product-photography.webp'
  })
  arr3.fill({ title: 'rum', price: 20, img: 'provstudio.webp' })

  const arr = [...arr1, ...arr2, ...arr3]
  return (
    <>
      <div>
        <ul>
          <li>home</li>
          <li>shop</li>
          <li>about</li>
        </ul>
      </div>
      <Store height={30} inventory={arr} />
      <div>
        <p>footer</p>
      </div>
    </>
  )
}

export default App
