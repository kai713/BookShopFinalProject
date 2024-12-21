import {configureStore} from '@reduxjs/toolkit';
import booksReducer from './BookSlice';
import cartReducer from './cartSlice';
import userReducer from './UserSlice';
import authReducer from './authSlice';
import wishReducer from './WishlistSlice';
const store = configureStore({
    reducer: {
        books: booksReducer,
        cart: cartReducer,
        user: userReducer,
        auth: authReducer,
        wishlist: wishReducer,
    }
});

export default store;
