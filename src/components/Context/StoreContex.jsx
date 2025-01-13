import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/assets";

export const StoreContext = createContext(null)


const StoreContextProvider =(props) =>{
        /*to keep track of the stst eof the cart items  */
    const [cartItems,setCartItems]=useState({})
    
  const addToCart =(itemId) =>{
    /*user adding for the first time */
    if(!cartItems[itemId]){
        /*The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object. */
      setCartItems((prev)=>({...prev,[itemId]:1}))  /*this takes all prev items to make sure they are preserved, then the id of new item added and assigns a value of one */
    }else{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))  /*Keeps the existing items and their quantities intact.
      Updates the quantity of the specific item being added by incrementing its value. */
    }
  }
  const removeFromCart =(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }

  useEffect(()=>{
    console.log(cartItems);
    
  }),[cartItems]

    const contexValue={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }
    return(
        <StoreContext.Provider value={contexValue}>
            {props.children}
        </StoreContext.Provider>
    )
}


export default StoreContextProvider