import React from 'react'

const cartReducer = (state,action) => {
    if(action.type==="ADD_TO_CART"){
        let {id,color,amount,product}=action.payload;
        let cartProduct;
        cartProduct={
            id:id+color,
            name:product.name,
            color,
            amount,
            image: product.image && product.image.length > 0 ? product.image[0].url : 'default_image_url',
            price: product.price,
            max: product.stock,
        };
       return{
        ...state,
        cart:[...state.cart, cartProduct],
       };
    }
    return state;
}

export default cartReducer
