import React from "react";
import FormatePrice from "../Helpers/FormatePrice";
import CartAmountToggel from "./CartAmountToggel";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";


const Cartitem = ({ name, price, amount, image, color, id }) => {
  
const {removeItem,setDecrease, setIncrease}=useCartContext();

  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
        <figure>
          <img src={image} alt={id} />
        </figure>
      </div>
      <div>
        <p>{name}</p>
        <div className="color-div">
          <p>color:</p>
          <div
            className="color-style"
            style={{ backgroundColor: color, color: color }}
          ></div>
        </div>
      </div>
    </div>
    <div className="cart-hide">
      <p>
        <FormatePrice price={price}/>
      </p>
    </div>
    <CartAmountToggel
        amount={amount}
        setIncrease={()=>setIncrease(id)}
        setDecrease={()=>setDecrease(id)}
      />

      <div className="cart-hide">
        <FormatePrice price={price*amount}/>
      </div>

      <div>
        <FaTrash  className="remove_icon" onClick={()=>removeItem(id)}/>
      </div>
    </div>
  );
};

export default Cartitem;
