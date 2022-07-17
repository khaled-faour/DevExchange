import { createSlice } from '@reduxjs/toolkit'
import { verify, logout } from '../actions/authActions';

const initialState = {
    isAuthenticated: false,
    user: {},
    error: null,
    isLoading: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.user;
    },
  },
  extraReducers: {
    // Verify user
    [verify.pending]: (state, action) => {
        state.isLoading = true;
    },
    [verify.fulfilled]: (state, action) => {
        console.log('User verified!');
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.isLoading = false;
    },
    [verify.rejected]: (state, action) => {
        state.isAuthenticated = false;
        state.user = {};
        state.isLoading = false;
    },

    // Logout user
    [logout.pending]: (state, action) => {
        state.isLoading = true;
    },
    [logout.fulfilled]: (state, action) => {
        state.isAuthenticated = false;
        state.user = {};
        state.isLoading = false;
    },
    [logout.rejected]: (state, action) => {
        state.isLoading = false;
    }
  }
})

// Action creators are generated for each case reducer function
export const { login } = userSlice.actions

export default userSlice.reducer