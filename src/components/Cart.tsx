import React, { useContext } from "react";
import { PRODUCTLIST } from "../ProductList";

import { ProductContext } from "./Context";
const Cart = () => {
  const {cart}=useContext(ProductContext)
  return (
    <div className="cart">
      <div>
        <h2>Your Cart</h2>
      </div>
      <div className="cart-items">
      {PRODUCTLIST.map(product=>{
        if(cart[product.id] !==0){
          return(
            <div className="cart-item">
<h3>{product.name}</h3>
            </div>
          )
        }
      })}
      </div>
    </div>
  );
};

export default Cart;
