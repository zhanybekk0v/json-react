
import axios from 'axios'
import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddContent from './components/AddContent/AddContent'
import Content from './components/Content/Content'
import EditContent from './components/EditContent/EditContent'
import Header from './components/Header/Header'
import InfoContent from './components/InfoContent/InfoContent'

const App = () => {
  const API = " http://localhost:8001/products"

  const [products, setProducts] = useState([])
  const [oneProduct, setOneProduct] = useState(null)

//TODO add (Запрос)
  function addProduct(newProduct) {
    axios.post(API, newProduct)
  }

  //? Read (get request)
  async function getProducts() {
    const result = await axios.get(API)
    setProducts(result.data);
  }

  // Todo delete
  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    getProducts()
  }
    //Todo edit
    async function getOneProduct(id) {
      let result = await axios.get(`${API}/${id}`)
      setOneProduct(result.data)
    }
  
    //Todo upDate 
    async function updateProduct(id, editedProduct) {
      await axios.patch(`${API}/${id}`, editedProduct)
  
    }


  return (
    <div>
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Content deleteProduct={deleteProduct} products={products} getProducts={getProducts} />} />
          <Route path='/add' element={<AddContent addProduct={addProduct} />} />
          <Route path='*' element={<h1> 404 NOT FOUND</h1>} />
          <Route path='/edit/:id' element={<EditContent updateProduct={updateProduct} getOneProduct={getOneProduct} oneProduct={oneProduct} />} />
          <Route path='/details/:id' element={<InfoContent getOneProduct={getOneProduct} oneProduct={oneProduct} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App