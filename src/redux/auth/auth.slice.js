import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logout, fetchCurrentUser } from './auth.operation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFechingCarrentUser: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: bilder => {
    bilder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(fetchCurrentUser.pending, state => {
        state.isFechingCarrentUser = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isFechingCarrentUser = false;
      })
      .addCase(fetchCurrentUser.rejected, state => {
        state.isFechingCarrentUser = false;
      });
  },
});

export const authReduser = authSlice.reducer;
