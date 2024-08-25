import React from 'react'
import {Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='bg-light py-2 container-fluid' >
     <Row className='p-5' style={{backgroundColor:'black', color:'white'}}>
    <Col sm={12} md={5}>
      {/* <h3>Media Player 2024</h3>
      <p style={{textAlign:'justify'}}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita dolorem molestiae corporis quasi? Minus consectetur mollitia obcaecati
         repellendus cupiditate ducimus, sunt vitae dolore dicta perspiciatis quibusdam modi, iste quis officia.
      </p> */}
    </Col>
    <Col sm={12} md={2}>
      {/* <h3>Links</h3> */}
      <div className='d-flex flex-column'>
           <Link >LinkedIn </Link>
           <Link >GitHUB</Link>
           <Link ></Link>

      </div>
    </Col>
    <Col sm={12} md={5} >
      <h6 style={{fontFamily:'fantacy'}}>Email: deekshakp546@gmail.com</h6>
      <h6>contact: 87876688098</h6>
      <textarea name='' id='' className='form-control' placeholder='Enter your message' style={{backgroundColor:'white', color:'black'}}></textarea>
      <button className='btn btn-info mt-4'>send</button>
      <p style={{fontFamily:'fantacy'}}>© 2024 Copyright.deekshakp546@gmail.com</p>
    </Col>
    
      </Row> 

    </div>

    
    </>
  )
}

export default Footer
