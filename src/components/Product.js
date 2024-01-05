import { NavLink } from "react-router-dom";
import React from "react";
import FormatePrice from "../Helpers/FormatePrice";

const Product = (curElem) => {
    const{id,name,image,price,category}=curElem;
  return (
    <NavLink to={`/singleProduct/${id}`}>
        <div className="card">
            <figure>
                <img src={image} alt={name}></img>
                <figcaption className="caption">{category}</figcaption>
            </figure>

            <div className="card-data">
                <div className="card-data-flex">
                    <h3>{name}</h3>
                    <p className="card-data--price">{<FormatePrice price={price}/>}</p>

                </div>
            </div>
        </div>
      
    </NavLink>
  )
}

export default Product;