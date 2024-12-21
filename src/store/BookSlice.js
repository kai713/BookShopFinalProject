import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const booksSlice = createSlice({
    name: 'books',
    initialState: {
        books: [], 
        loading: false, 
        error: null
    },
    reducers: {
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

// Thunk для загрузки данных
export const fetchBooks = () => async (dispatch) => {
    dispatch(setLoading(true)); // Установка состояния загрузки
    try {
        const response = await axios.get('http://localhost:8080/api/books');
        console.log(response.data); // Лог данных
        dispatch(setBooks(response.data)); // Обновление списка книг
    } catch (err) {
        dispatch(setError(err.message)); // Обработка ошибки
    } finally {
        dispatch(setLoading(false)); // Завершение загрузки
    }
};

export default booksSlice.reducer;
