import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './BookSlice';
import cartReducer from './CartSlice';

const store = configureStore({
    reducer: {
        books: booksReducer,
        cart: cartReducer
    }
});

export default store;
