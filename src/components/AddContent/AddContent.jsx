import React, { useState } from 'react'
import './AddContent.css'

const AddContent = ({addProduct}) => {
  const [title, setTitle] = useState()
  const [price, setPrice] = useState()
  const [kategory, setKategory] = useState()
  const [desc, setDesc] = useState()
  const [img, setImg] = useState()

  function handleValues (){
    const newProduct ={
      title,
      price,
      kategory,
      desc,
      img,
    };

    addProduct(newProduct);

    setTitle('')
    setPrice('')
    setKategory('')
    setDesc('')
    setImg('')

  }

 

  return (
    <div>
       <div className='container mt-5'> 
       <div className="add-place">
      <div className="add-place-inp">
      <input value={title} onChange={(e) => setTitle(e.target.value)} className="inp-place inp1" type="text" placeholder='Title'/> 
      <input value={price} onChange={(e) => setPrice(e.target.value)} className="inp-place inp2" type="text" placeholder='Price'/> <br />
      <input  value={kategory} onChange={(e) => setKategory(e.target.value)} className="inp-place inp3" type="text" placeholder='Kategory'/>
      <input  value={desc} onChange={(e) => setDesc(e.target.value)} className="inp-place inp4" type="text" placeholder='Opisaniya'/> <br />
      <input  value={img} onChange={(e) => setImg(e.target.value)} className="inp-place inp5" type="text" placeholder=' Url image'/> <br />
      <button className='btn btn-success text-center mt-5' onClick={() => handleValues()}> Add product</button>
      </div>
      </div>
    </div>
    </div>
  )
}

export default AddContent