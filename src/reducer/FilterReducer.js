const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };
    case "SET_GRIDVIEW":
      return {
        ...state,
        grid_view: true,
      };
    case "SET_LISTVIEW":
      return {
        ...state,
        grid_view: false,
      };
    case "GET_SORT_VALUE":
      
      return {
        ...state,
        sorting_value: action.payload,
      };
    case "SORTING_PRODUCTS":
      let newSortData;
      const {filter_products,sorting_value}=state;
      let tempSortProduct = [...filter_products];

      const sortingProducts=(a,b)=>{
        if (sorting_value === "lowest") {
          return a.price - b.price;
      }
      if (sorting_value === "highest") {
        return b.price - a.price;
      }
      if (sorting_value === "z-a") {
        return b.name.localeCompare(a.name)
      }
      if (sorting_value === "a-z") {
        return a.name.localeCompare(b.name)
      }
    }

      newSortData = tempSortProduct.sort(sortingProducts);
      return {
        ...state,
        filter_products: newSortData,
      };

      case "UPDATE_FILTER_VALUE":
        const{name,value}=action.payload;
        return{
          ...state,
          filters:{
            ...state.filters,
          [name]:value,
        },
      };

      case "FILTER_PRODUCTS":
        let {all_products}=state;
        let tempFilterProducts=[...all_products];

        const {text,category,company,color}=state.filters;
        if (text) {
          tempFilterProducts = tempFilterProducts.filter((curElem) => {
            // Check if curElem and curElem.name are defined before accessing properties
            if (curElem && curElem.name && typeof curElem.name === 'string') {
              return curElem.name.toLowerCase().includes(text.toLowerCase());
            }
            return false; // Handle the case where curElem or curElem.name is undefined or not a string
          });
        }
        if(category!=="All"){
          tempFilterProducts=tempFilterProducts.filter((curElem)=>{
            return curElem.category===category;
          });
        }
        if(company!=="All"){
          tempFilterProducts=tempFilterProducts.filter((curElem)=>{
            return curElem.company===company;
          });
        }
        if(color!=="All"){
          tempFilterProducts=tempFilterProducts.filter((curElem)=>
            curElem.colors.includes(color)
          );
        }
      
        return{
          ...state,
          filter_products:tempFilterProducts,
        };
    default:
      return state;
  }
};
export default FilterReducer;
