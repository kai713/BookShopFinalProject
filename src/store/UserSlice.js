import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateUserOnServer = createAsyncThunk(
  "user/updateUserOnServer",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.put("/api/user/update", userData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  user: {
    name: "Нуртас Муханбетов",
    email: "nurtasmuhanbetov@gmail.com",
    phone: "+7 (999) 123-45-67",
    location: "Москва, Россия",
    goal: 50,
    booksRead: 42,
    avatarUrl: "https://via.placeholder.com/150",
    status: "Online",
    bio: "Путешественник в мире книг.",
  },
  status: "idle", 
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser(state, action) {
      state.user = { ...state.user, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUserOnServer.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUserOnServer.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = { ...state.user, ...action.payload };
      })
      .addCase(updateUserOnServer.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
