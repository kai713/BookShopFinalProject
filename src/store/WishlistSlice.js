import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Список избранного
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.items.push(action.payload); // Добавляем книгу в избранное
    },
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id); // Удаляем из избранного
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
