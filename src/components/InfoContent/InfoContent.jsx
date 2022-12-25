import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

const InfoContent = ({getOneProduct, oneProduct}) => {
  const [title, setTilte] = useState('')
  const [price, setPrice] = useState('')
  const [kategory, setKategory] = useState('')
  const [desc, setDesc] = useState('')
  const [img, setImg] = useState('')

  const params = useParams()
  const navigate = useNavigate()

  useEffect(()=> {
    getOneProduct(params.id)
  }, [])

useEffect(() => {
  if (oneProduct){
    setTilte(oneProduct.title)
    setPrice(oneProduct.price)
    setKategory(oneProduct.kategory)
    setDesc(oneProduct.desc)
    setImg(oneProduct.img)
  }
} , [oneProduct])


  return (
<div className='container d-flex justify-content-between flex-wrap text-dark'>
 <Card className='mt-5' style={{ width: '18rem' }}>
   <Card.Img variant="top" src={img} />
   <Card.Body>
   <h1>{title}</h1>
     <h2>$
       {price}
     </h2>
     <h3>
       {kategory}
     </h3>
     <p>
       {desc}
     </p>
     <div className='btn'>
     <Button onClick={() => navigate('/')} variant="secondary">Cancel</Button>
     </div>
   </Card.Body>
 </Card>

</div>


  )
}

export default InfoContent