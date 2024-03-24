import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import PageNotFound from './components/pageNotFound/PageNotFound'
import NavBar from './components/navBar/NavBar'

import './App.css'

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer title="Tienda"/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer title='Tienda'/>} />
          <Route path='/product/:productId' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<h1>Carrito</h1>} />
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
