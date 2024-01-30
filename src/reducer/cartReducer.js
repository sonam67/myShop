const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
      let { id,product,color,amount } = action.payload;
    
      let cartProduct;
  
      cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };
  console.log(product.image);
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  
  
    return state;
  };
  
  export default cartReducer;