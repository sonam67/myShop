import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
  let newCartData = localStorage.getItem("myshopdata");
  if (!newCartData || newCartData === "undefined") {
    return [];
  }
  return JSON.parse(newCartData);
};

const initialState = {
  cart: getLocalCartData(),
  total_item: 0,
  total_amount: 0,
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, product, color, amount) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, product, color, amount } });
  };

  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREAMENT", payload: id });
  };

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREAMENT", payload: id });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  useEffect(() => {
    dispatch({ type: "CART_ITEM_PRICE_TOTAL" });
    localStorage.setItem("myshopdata", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, clearCart, setIncrease, setDecrease }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
