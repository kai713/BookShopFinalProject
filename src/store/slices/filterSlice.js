import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedGenre: "Все",
  currentPage: 0,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setGenre: (state, action) => {
      state.selectedGenre = action.payload;
      state.currentPage = 0;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setGenre, setPage } = filterSlice.actions;
export default filterSlice.reducer;
