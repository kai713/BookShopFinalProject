import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [], // {bookId, title, author, price, quantity}
        coupon: "",
        discountAmount: 0
    },
    reducers: {
        addToCart: (state, action) => {
            const { book, quantity } = action.payload;
            const existing = state.items.find(item => item.bookId === book.bookId);
            if (existing) {
                existing.quantity += quantity;
            } else {
                state.items.push({
                    bookId: book.bookId,
                    title: book.title,
                    author: book.authorName,
                    price: book.price - (book.discount || 0),
                    quantity: quantity
                });
            }
        },
        removeFromCart: (state, action) => {
            const bookId = action.payload;
            state.items = state.items.filter(item => item.bookId !== bookId);
        },
        updateQuantity: (state, action) => {
            const { bookId, quantity } = action.payload;
            const existing = state.items.find(item => item.bookId === bookId);
            if (existing && quantity > 0) {
                existing.quantity = quantity;
            }
        },
        setCoupon: (state, action) => {
            state.coupon = action.payload;
        },
        applyCouponDiscount: (state, action) => {
            // для примера: если купон "SALE10" - скидка 10%
            if (state.coupon === "SALE10") {
                const subtotal = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
                state.discountAmount = subtotal * 0.1;
            } else {
                state.discountAmount = 0;
            }
        }
    }
});

export const { addToCart, removeFromCart, updateQuantity, setCoupon, applyCouponDiscount } = cartSlice.actions;
export default cartSlice.reducer;
