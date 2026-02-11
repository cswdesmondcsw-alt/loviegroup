import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "../../servies/auth/authService";

//async thunk
export const loginThunk = createAsyncThunk(
  "auth/login",
  async (loginData, { rejectWithValue }) => {
    try {
      const res = await loginUser(loginData);
      return res;
    } catch (err) {
      return rejectWithValue(
        err?.error?.message || "Invalid username or password",
      );
    }
  },
);

const authSlice = createSlice({
  name: "authLogin",
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
    isAuthenticated: false,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.jwt;
        state.isAuthenticated = true;

        localStorage.setItem("token", action.payload.jwt);
        localStorage.setItem("user", JSON.stringify(action.payload.user));
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
