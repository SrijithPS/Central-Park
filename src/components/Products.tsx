import { Button, Card } from "react-bootstrap";
import { productList } from "../ProductList";
import { Cart } from "./Cart";

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
  addToCart:(product:ProductProps)=>void;
};

export function Products({addToCart}:{addToCart:(product:ProductProps)=>void}) {
  const productListItems = productList.map((product) => (
    <div className="card-layout">
      <Card className="cards" key={product.id}>
        <Card.Img src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text> &#8377; {product.pricePaisa / 100}</Card.Text>
          <p></p>
          <Button variant="secondary" onClick={()=>addToCart(product)}>Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  ));

  return <div>{productListItems}</div>;
}


