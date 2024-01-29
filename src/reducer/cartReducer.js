const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
      let { id, color, amount, product } = action.payload;
      // console.log(
      //   "🚀 ~ file: cartReducer.js ~ line 4 ~ cartReducer ~ product",
      //   product
      // );
  
      let cartProduct;
  
      cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image,
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