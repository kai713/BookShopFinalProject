import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const booksSlice = createSlice({
    name: 'books',
    initialState: {
        books: [], // Пустой массив для данных книг
        loading: false, // Индикатор загрузки
        error: null // Ошибка (если есть)
    },
    reducers: {
        setBooks: (state, action) => {
            state.books = action.payload; // Сохраняем книги в состояние
        },
        setLoading: (state, action) => {
            state.loading = action.payload; // Устанавливаем состояние загрузки
        },
        setError: (state, action) => {
            state.error = action.payload; // Сохраняем ошибку
        }
    }
});

// Экшены из слайса
export const {setBooks, setLoading, setError} = booksSlice.actions;

// Асинхронный экшен для загрузки книг с API
export const fetchBooks = () => async (dispatch) => {
    dispatch(setLoading(true)); // Включаем индикатор загрузки
    try {
        const response = await axios.get('https://67640f9617ec5852caeb066d.mockapi.io/api/books/books');
        console.log(response.data);
        dispatch(setBooks(response.data)); // Сохраняем книги в Redux
    } catch (err) {
        dispatch(setError(err.message)); // Сохраняем сообщение об ошибке
    } finally {
        dispatch(setLoading(false)); // Отключаем индикатор загрузки
    }
};

export default booksSlice.reducer;
