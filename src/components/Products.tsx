import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { productList } from "../ProductList";
import { useState } from "react";
import Cart from "./Cart";

type item = {
  id: number;
  name: string;
  image: string;
  pricePaisa: number;
  category: string;
  rating: {
    stars: number;
    count: number;
  };
};
const Products = () => {
  const[productId,setProductId]=useState<number[]>([]);
  const addToCart=(productIdToAdd:number)=>{
    setProductId(...productId,productIdToAdd)
  }
  return (
    <>
      <Row xs={1} md={2} lg={4} className="g-3" style={{marginTop:'0px'}}>
        {productList.map((product) => (
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

                <Button variant="outline-secondary" onClick={()=>addToCart(product.id)} >Add Product
                
                </Button>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
      <Cart productId={productId} />
    </>
  );
};

export default Products;
