import { Button, Card } from "react-bootstrap";
import { productList } from "./ProductList";
import { useState } from "react";

export type ProductProps = {
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

export function Products() {
  
  const productListItems = productList.map((product) => (
    <Card style={{ width: "18rem" }} key={product.id}>
      <Card.Img src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text> &#8377; {product.pricePaisa / 100}</Card.Text>
        <p></p>
        <Button variant="secondary" onClick={() => Cart.addToCart(product)}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  ));

  return <div>{productListItems}</div>;
}
