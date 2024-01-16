import { createContext, useEffect } from "react";
import {useProductContext} from "./productContext";
import { useReducer,useContext } from "react";
import reducer  from "../reducer/FilterReducer";

const FilterContext=createContext();

const initialState={
    filter_products:[],
    all_products:[],
    grid_view: true,
    sorting_value:"lowest",
    filters:{
        text:"",
    },
}

export const FilterContextProvider=({children})=>{
    const {products}=useProductContext();
     
    const [state,dispatch] =useReducer(reducer,initialState);

    const setGridView=()=>{
        return dispatch({type: "SET_GRIDVIEW"});
    }
    const setListView=()=>{
        return dispatch({type: "SET_LISTVIEW"});
    }
    const sorting=(event)=>{
        let userValue=event.target.value;
        dispatch({type:"GET_SORT_VALUE",payload:userValue});
    }
    const updateFilterValue=(event)=>{
        let name=event.target.name;
        let value=event.target.value;
        dispatch({type:"UPDATE_FILTER_VALUE",payload:{name,value}});
    }
    useEffect(()=>{
        dispatch({type:"SORTING_PRODUCTS" });
    },[state.sorting_value])

    useEffect(()=>{
        dispatch({type:"LOAD_FILTER_PRODUCTS",payload: products});
    },[products])
    return(
        <FilterContext.Provider value={{...state,setGridView,setListView,sorting,updateFilterValue}}>
            {children}
        </FilterContext.Provider>
    )
};

export const useFilterContext=()=>{
    return useContext(FilterContext);
}

