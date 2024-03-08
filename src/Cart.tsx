import { useState } from "react";

export function Cart(){
  
  

  const [cart, setCart] = useState([]);
  function addToCart( product) {
    setCart([...cart, product]);
  }

  return(
  <>
  <ul>
    {cart.map(item=>(
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
  </>);
}