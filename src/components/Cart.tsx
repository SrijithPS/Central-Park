import { useState } from "react";

import { ProductProps } from "./Products";
import { Products } from "./Products";
export function Cart() {
  const [cart, setCart] = useState<ProductProps[]>([]);
   function addToCart(product: ProductProps) {
    setCart((prevCart) => [...prevCart, product]);
  }

  return (
    <div>
    <h2>My Cart</h2>
    <ul>
      {cart.map((item,index)=>(
        <li key={index}>{item.name}</li>
      )

      )}
    </ul>
    <Products  addToCart={addToCart}/>
    </div>
  );
}
