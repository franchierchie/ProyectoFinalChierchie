import { createSlice } from '@reduxjs/toolkit';

export const ecommerceSlice = createSlice({
    name: 'ecommerce',
    initialState: {
        isLoading: false,
        products: [],
        activeCategory: null,
        cart: [],
    },
    reducers: {
        loading: ( state ) => {
            state.isLoading = true;
        },
        setProducts: ( state, action ) => {
            state.isLoading = false;
            state.activeCategory= 'all',
            state.products = action.payload;
        },
        setCart: ( state, action ) => {
            state.isLoading = false;
            state.cart = action.payload;
        },
        setActiveCategories: ( state, action ) => {
            state.isLoading = false;
            state.activeCategory = action.payload;
        },
        addToCart: ( state, action ) => {
            state.isLoading = false;
            state.cart.push( action.payload );
        },
        updateAmount: ( state, action ) => {
            state.isLoading = false;
            state.cart = state.cart.map( prod => {

                if ( prod.id === action.payload.id ) {
                    return action.payload;
                }

                return prod;
            });
        },
        deleteProductCartById: ( state, action ) => {
            state.isLoading = false;
            state.cart = state.cart.filter( prod => prod.id !== action.payload );
        },
        checkout: ( state ) => {
            state.isLoading = false;
            state.cart = [];
        },
        clearProductsLogOut: ( state ) => {
            state.isLoading = false;
            state.products = [];
            state.activeCategory = null;
            state.cart = [];
        },
    }
});


// Action creators are generated for each case reducer function
export const {
    loading,
    setProducts,
    setCart,
    setActiveCategories,
    addToCart,
    updateAmount,
    deleteProductCartById,
    checkout,
    clearProductsLogOut,
} = ecommerceSlice.actions;