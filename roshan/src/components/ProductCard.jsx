import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const ProductCard = (props) => {
    console.log(props.product);
  return (
<Card style={{ width: '18rem' }} className='col-4'>
      <Card.Img variant="top" src={props.product.thumbnail}/>
      <Card.Body>
        <Card.Title>{props.product.title}</Card.Title>
        <Card.Text>
         {props.product.description}
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard