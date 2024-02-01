import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getLocalCartData=()=>{
  let newCartData=localStorage.getItem("myshopdata")
  if(newCartData === null || newCartData === ""){
    return [];
  }
  else{
    return JSON.parse(newCartData);
  }
};

const initialState = {
  cart: getLocalCartData(),
  total_item: "",
  total_amount: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id,product,color,amount) => {
    dispatch({ type: "ADD_TO_CART", payload: { id,product,color,amount } });
  };
  const removeItem=(id)=>{
    dispatch({type:"REMOVE_ITEM", payload:id});
  }
  const clearCart=()=>{
    dispatch({type:"CLEAR_CART"});
  }
  useEffect(() => {
    localStorage.setItem("myshopdata",JSON.stringify(state.cart))
  }, [state.cart])
  

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem , clearCart}}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };