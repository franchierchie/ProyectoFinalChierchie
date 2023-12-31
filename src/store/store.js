import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { ecommerceSlice } from './ecommerce';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        ecommerce: ecommerceSlice.reducer,
    }
});