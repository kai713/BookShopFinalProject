import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstance";

export const authenticateUser = createAsyncThunk(
  "/auth",
  async (userInfo, { rejectWithValue }) => {
    // Выбор эндпоинта: регистрация или логин
    const endpoint = userInfo.name ? "/register" : "/login";
    try {
      const response = await axiosInstance.post(endpoint, userInfo);
      return response.data; // Возвращаем данные от сервера
    } catch (error) {
      // Если сервер вернул ошибку
      if (error.response) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue("Network error");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.error = null; // Сбрасываем ошибки
      localStorage.removeItem("token"); // Удаляем токен при выходе
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authenticateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        localStorage.setItem("token", action.payload.token); // Сохраняем токен
      })
      .addCase(authenticateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
