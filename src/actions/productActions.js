import { FETCH_PRODUCTS } from "../types";
import {FILTER_PRODUCTS_BY_SIZE} from '../types';
import {ORDER_PRODUCTS_BY_PRICE} from '../types';

export const fetchProducts = () => async (dispatch) => {
    const res = await fetch ("/api/products");
    const data = await res.json();
    console.log(data);
    dispatch({
        type: FETCH_PRODUCTS,
        payload: data,
    });
};

export const filterProducts = ( products , size ) => (dispatch) => {
    dispatch({
        type: FILTER_PRODUCTS_BY_SIZE,
        payload: {
            size: size,
            items: size === "" 
            ? products
            : products.filter( (x) => x.availableSizes.indexOf(size) >= 0),
        },
    });
};


export const sortProducts = (filterProducts, sort) => (dispatch) => {
   
   const sortedProducts = filterProducts.slice();
   
   if(sort === "latest") {
       sortedProducts.sort((a,b) => (a.id > b.id ? 1 : -1));
   }
   else {
    sortedProducts.sort((a,b) => (
        sort ==="lowest" 
        ? a.price > b.price 
            ? 1
            : -1
        : a.price > b.price 
            ? -1
            : 1 
    ))
   }
   
   dispatch({
        type: ORDER_PRODUCTS_BY_PRICE,
        payload: {
            sort: sort,
            items: sortedProducts,
        }
    })
}