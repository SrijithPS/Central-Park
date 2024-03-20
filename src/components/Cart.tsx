import React from 'react'
import { productList } from '../ProductList'
import { Card, Col } from 'react-bootstrap'

const Cart = ({productId}:{productId:number}) => {
  const addToCart=(productId:number)=>{
    productList.map(product=>{
      if(product.id===productId){
        return (<>
         <Col key={product.id} >
            <div className="card-layout">
              <Card style={{width: '250px',height: '520px'}}>
                <Card.Img src={product.image} style={{objectFit:'cover'}} />
                
                <Card.Body  >
                <Card.Title>{product.name}</Card.Title>
                  <span>{product.rating.stars} </span>
                  <span>{product.rating.count}</span>
                  <Card.Text className="text-muted"> &#8377;{product.pricePaisa / 100} /-</Card.Text>
                </Card.Body>

               
              </Card>
            </div>
          </Col>
        </>)
      }
    })

  }
  return (
    <div>
      <h2>Your Cart</h2>

    </div>
  )
}

export default Cart
