import { ReactNode, createContext, useContext, useState } from "react";
import { ItemProps } from "../Products";
type CartContextType={
  cartItems:ItemProps[];
  addToCart:(item:ItemProps)=>void;
  
}
const CartContext=createContext<CartContextType | undefined>(undefined);

export const CartContextProvider=({children}:{children:ReactNode})=>{
const [cartItems,setCartItems]=useState<ItemProps[]>([]);

const addToCart=(item:ItemProps)=>{
  setCartItems((prevItems)=>[...prevItems,item]);
 }
 return(
   <CartContext.Provider value={{cartItems,addToCart}} >
     {children}
   </CartContext.Provider>
 )
}
export const useCart=()=>{
  const context=useContext(CartContext);
  if(!context){
    throw new Error('useCartmust be used within the CartContextProvider');
  }
  return context;
}






