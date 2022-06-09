import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Store1 from './Pages/Store1'
import Store2 from './Pages/Store2'
import Store3 from './Pages/Store3'
// import Store from 'responsive-store-react'
import { Container } from './styles'
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
    <BrowserRouter>
      <Navbar />
      <Container>
        <Routes>
          <Route
            exact
            path='/'
            element={<Store1 inventory={[arr1, arr2, arr3]} />}
          />
          <Route
            path='Store1'
            element={<Store1 inventory={[arr1, arr2, arr3]} />}
          />
          <Route path='Store2' element={<Store2 inventory={arr} />} />
          <Route
            path='Store3'
            element={<Store3 height={30} inventory={[arr1, arr2]} />}
          />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  )
}

export default App
