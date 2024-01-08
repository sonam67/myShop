const FilterReducer=(state,action)=>{
    switch (action.type){
        case "LOAD_FILTER_PRODUCTS":
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: action.payload,
            }
            case "SET_GRIDVIEW":
                return{
                    ...state,
                    grid_view:true,
                };
            case "SET_LISTVIEW":
                return {
                    ...state,
                    grid_view:false,
                };

            default:
                return state;
    }
};
export default FilterReducer;