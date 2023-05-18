import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards = ({product}) => {
  return (
    <>
    <Card style={{ width: '18rem' }} className='col-3 ms-5 h-25' >
      <Card.Img variant="top" src={product.thumbnail} className='no' />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
            {product.description}
       
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default Cards