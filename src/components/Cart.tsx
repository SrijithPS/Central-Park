import React from 'react'
import { productList } from '../ProductList'
import { Card, Col } from 'react-bootstrap'

const Cart = ({productId}:{productId:number}) => {
  const selectedProduct=productList.find(product=>product.id===productId);
  if(!selectedProduct){
    return(
      <div>
        <h2>No product found</h2>
      </div>
    )
  }
 
  return (
    <div>
      <h2>Your Cart</h2>
      <Col key={selectedProduct.id} >
          <div className="card-layout">
            <Card style={{width: '250px',height: '520px'}}>
              <Card.Img src={selectedProduct.image} style={{objectFit:'cover'}} />
              
              <Card.Body  >
              <Card.Title>{selectedProduct.name}</Card.Title>
                <span>{selectedProduct.rating.stars} </span>
                <span>{selectedProduct.rating.count}</span>
                <Card.Text className="text-muted"> &#8377;{selectedProduct.pricePaisa / 100} /-</Card.Text>
              </Card.Body>

             
            </Card>
          </div>
        </Col>
    </div>
  )
}

export default Cart
