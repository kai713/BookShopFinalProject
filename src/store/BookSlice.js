import {createSlice} from '@reduxjs/toolkit';
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


export const {setBooks, setLoading, setError} = booksSlice.actions;


export const fetchBooks = () => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await axios.get('https://67640f9617ec5852caeb066d.mockapi.io/api/books/books');
        console.log(response.data);
        dispatch(setBooks(response.data));
    } catch (err) {
        dispatch(setError(err.message));
    } finally {
        dispatch(setLoading(false));
    }
};

export default booksSlice.reducer;
