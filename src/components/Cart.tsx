import { useState } from "react";

import { ProductProps } from "./Products";
import { Products } from "./Products";
import { Card } from "react-bootstrap";
export function Cart() {
  const [cart, setCart] = useState<ProductProps[]>([]);
   function addToCart(product: ProductProps) {
    setCart((prevCart) => [...prevCart, product]);
  }

  return (
    <div>
    <h2>My Cart</h2>
    <ul>
      {cart.map((item)=>(
       <div className="card-layout">
       <Card className="cards" key={item.id}>
         <Card.Img src={item.image} />
         <Card.Body>
           <Card.Title>{item.name}</Card.Title>
           <Card.Text> &#8377; {item.pricePaisa / 100}</Card.Text>
           <p></p>
          
         </Card.Body>
       </Card>
     </div>
      )

      )}
    </ul>
    <Products  addToCart={addToCart}/>
    </div>
  );
}
