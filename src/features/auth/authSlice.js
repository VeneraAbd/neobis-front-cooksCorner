import { createAsyncThunk, createSlice, createAction } from '@reduxjs/toolkit';
import authService from './authService';

export const setEmail = createAction('auth/setEmail');

//get user from local storage
const user = JSON.parse(localStorage.getItem("user"))

const initialState = {
    user: user ? user : null,
    email: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}
//register
export const register = createAsyncThunk('auth/register', async({name, email,  password, confirmPassword }, thunkAPI) => {
  try{
    return await authService.register({name, email,  password, confirmPassword })
  } catch(error){
    const message = (error.reponse && error.response.data && error.response.data.message) 
    || error.mesage || error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})
//logout
export const logout = createAsyncThunk('auth/logout',
async() => {
  await authService.logout()
}
)
//login user
export const login = createAsyncThunk('auth/login', async({ email,  password }, thunkAPI) => {
  try{
    return await authService.login({ email,  password })
  } catch(error){
    const message = (error.reponse && error.response.data && error.response.data.message) 
    || error.mesage || error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) =>{
        state.isLoading = false
        state.isError = false
        state.isSuccess = false
        state.message = ""
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(logout.fulfilled, (state) =>{
        state.user = null
      })
      .addCase(setEmail, (state, action) => {
        state.email = action.payload;
      });
  }
})
export const {reset} = authSlice.actions
export default authSlice.reducer