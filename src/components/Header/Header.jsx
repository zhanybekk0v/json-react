import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
       <>

<Navbar bg="dark" variant="dark" className='p-3'>
  <Container >
    <Link to='/'>
      <Navbar.Brand >Home</Navbar.Brand>
    </Link>
    <Link to='/add'>

      <Navbar.Brand >add-content</Navbar.Brand>
    </Link>
  </Container>
</Navbar>


</>
    </div>
  )
}

export default Header