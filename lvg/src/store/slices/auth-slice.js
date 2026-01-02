import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: true  // <-- temporary: allow all protected pages
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => { state.isAuthenticated = true; },
    logout: (state) => { state.isAuthenticated = false; }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
