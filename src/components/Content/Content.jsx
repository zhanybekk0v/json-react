import React, { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './Content.css'

const Content = ({getProducts, products, deleteProduct}) => {

  useEffect(() => {
    getProducts()
  }, [])

  const navigate = useNavigate()

  return (
    <div>
       <div className='container d-flex justify-content-between flex-wrap  text-dark'>
      {products.map((item) => (
        <Card className='mt-5' key={item.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.img} />
          <Card.Body>
          <h1>{item.title}</h1>
            <h2>$
              {item.price}
            </h2>
            <h3>
              {item.kategory}
            </h3>
            <p>
              {item.desc}
            </p>
            <div className='btn'>
            <Button  onClick={() => navigate(`/edit/${item.id}`)} variant="secondary ">Edit</Button>
            <Button variant="success" onClick={() => navigate(`/details/${item.id}`)}>Details</Button>
            <Button onClick={() => deleteProduct(item.id)} variant="danger">Delete</Button>
            </div>
          </Card.Body>
        </Card>
      ))}

    </div>
  
    </div>
  )
}

export default Content