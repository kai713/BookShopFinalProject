import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // [{ id, title, price, quantity }]
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Добавление товара в корзину
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        // Если товар уже в корзине, увеличиваем его количество
        existingItem.quantity += action.payload.quantity || 1;
      } else {
        // Если товара нет в корзине, добавляем его с количеством 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    // Удаление товара из корзины
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },

    // Очистка всей корзины
    clearCart: (state) => {
      state.items = [];
    },

    // Уменьшение количества товара в корзине
    decrementQuantity: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          // Если количество становится 0, удаляем товар из корзины
          state.items = state.items.filter(item => item.id !== action.payload.id);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
