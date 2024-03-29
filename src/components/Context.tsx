import React, { useState } from "react";
import { createContext } from "react";
import { PRODUCTLIST } from "../ProductList";
export const ProductContext = createContext(null);
const getDefaultCart = () => {
  let cart: any = {};
  for (let i = 1; i < PRODUCTLIST.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
const ContextProvider = (props: any) => {
  const [cart, setCart] = useState(getDefaultCart());
  const addToCart = (productId: string | number) => {
    setCart((prev) => ({ ...prev, [productId]: prev[productId] + 1 }));
  };
  const removeFromCart = (productId: string | number) => {
    setCart((prev) => ({ ...prev, [productId]: prev[productId] - 1 }));
  };
  const contextValue = { cart, addToCart, removeFromCart };
  //console.log(cart);
  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ContextProvider;
