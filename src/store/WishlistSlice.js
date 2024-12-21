import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [], // [{ id, title, authorName, price }]
  },
  reducers: {
    addToWishlist: (state, action) => {
      const exists = state.items.some((item) => item.bookId === action.payload.bookId);
      if (!exists) {
        state.items.push(action.payload); // Добавляем уникальный элемент
      }
    },
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter((item) => item.bookId !== action.payload); // Удаляем элемент по bookId
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer; 