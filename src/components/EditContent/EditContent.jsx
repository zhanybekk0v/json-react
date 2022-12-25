import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './EditContent.css'

const EditContent = ({ getOneProduct, oneProduct, updateProduct }) => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [kategory, setKategory] = useState('')
  const [desc, setDesc] = useState('')
  const [img, setImg] = useState('')

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getOneProduct(params.id)
  }, [])

  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.title)
      setPrice(oneProduct.price)
      setKategory(oneProduct.kategory)
      setDesc(oneProduct.desc)
      setImg(oneProduct.img)

    }
  }, [oneProduct])

  function handleValues() {
    const editNewProduct = {
      title,
      price,
      kategory,
      desc,
      img,
    };
    updateProduct(params.id, editNewProduct)

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
            <input value={title} onChange={(e) => setTitle(e.target.value)} className="inp-place inp1" type="text" placeholder='Title' />
            <input value={price} onChange={(e) => setPrice(e.target.value)} className="inp-place inp2" type="text" placeholder='Price' /> <br />
            <input value={kategory} onChange={(e) => setKategory(e.target.value)} className="inp-place inp3" type="text" placeholder='Kategory' />
            <input value={desc} onChange={(e) => setDesc(e.target.value)} className="inp-place inp4" type="text" placeholder='Opisaniya' /> <br />
            <input value={img} onChange={(e) => setImg(e.target.value)} className="inp-place inp5" type="text" placeholder=' Url image' /> <br />
            <div className='d-flex justify-content-evenly'>
              <button className='btn btn-dark text-center mt-5 ' onClick={() => navigate('/')}>Cancel</button>
              <button className='btn btn-success text-center mt-5' onClick={() => { navigate('/'); handleValues() }}>Sace chages</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditContent