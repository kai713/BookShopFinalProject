import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// Моковые данные книг (в реальном приложении получим их по API)
// Пример объекта книги соответствует приблизительно сущности Book

const initialBooks = [
    {
        bookId: 1,
        title: "Книга 1",
        author: { authorId: 1, name: "Автор 1", biography: "", dateOfBirth: "1970-01-01" },
        category: { categoryId: 1, name: "Фантастика" },
        price: 500,
        discount: 0,
        stockQuantity: 10,
        currency: { currencyCode: "KZT" },
        description: "Описание книги 1",
        publishedYear: 2021,
        createdAt: "2023-10-01",
        updatedAt: "2023-10-05",
        imageData: null,
        isRecommended: true,
        isNewArrival: false,
        isPopular: true
    },
    {
        bookId: 2,
        title: "Книга 2",
        author: { authorId: 2, name: "Автор 2", biography: "", dateOfBirth: "1980-05-10" },
        category: { categoryId: 2, name: "Детектив" },
        price: 1000,
        discount: 100,
        stockQuantity: 5,
        currency: { currencyCode: "KZT" },
        description: "Описание книги 2",
        publishedYear: 2022,
        createdAt: "2023-11-01",
        updatedAt: "2023-11-05",
        imageData: null,
        isRecommended: false,
        isNewArrival: true,
        isPopular: false
    },
    {
        bookId: 3,
        title: "Книга 3",
        author: { authorId: 1, name: "Автор 1", biography: "", dateOfBirth: "1970-01-01" },
        category: { categoryId: 1, name: "Фантастика" },
        price: 300,
        discount: 50,
        stockQuantity: 0,
        currency: { currencyCode: "KZT" },
        description: "Описание книги 3",
        publishedYear: 2020,
        createdAt: "2023-09-01",
        updatedAt: "2023-09-05",
        imageData: null,
        isRecommended: true,
        isNewArrival: false,
        isPopular: false
    }
];

const booksSlice = createSlice({
    name: 'books',
    initialState: {
        books: initialBooks,
        loading: false,
        error: null
    },
    reducers: {
        // в будущем можно добавить логику
        // получения книг из API
        setBooks: (state, action) => {
            state.books = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const { setBooks, setLoading, setError } = booksSlice.actions;
export default booksSlice.reducer;
