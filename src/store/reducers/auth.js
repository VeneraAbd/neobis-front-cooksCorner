import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
import axios from "axios";


export const setEmail = createAction('auth/setEmail');

const initialState = {
  currentUser: undefined,
  isLoading: false,
  email: null,
};

export const register = createAsyncThunk(
  "auth/register",
  async ({ email, username, password, confirmPassword }, thunkAPI) => {
    try {
      const response = await axios.post("https://cookscorner-production-6571.up.railway.app/api/v1/auth/register", {
        email, username, password, confirmPassword
      });
      console.log("response", response)
      thunkAPI.dispatch(setEmail(email));
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.errors);
    }
  }
);

// export const login = createAsyncThunk(
//   "auth/login",
//   async ({ username, password }, thunkAPI) => {
//     try {
//       const response = await axios.post(
//         "https://kunasyl-backender.org.kg/login/",
//         {
//           username, password
//         }
//       );

//         localStorage.setItem("refreshToken", response.data.tokens.refresh);
//         localStorage.setItem("accessToken", response.data.tokens.access);

//       return response.data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.response.data.errors);
//     }
//   }
// );

// export const getCurrentUser = createAsyncThunk(
//   "auth/getCurrentUser",
//   async (_, thunkAPI) => {
//     try {
//       const token = localStorage.getItem("accessToken") ?? "";
//       let response;
//     //   const decodedToken = jwtDecode(token);
//     //   if (decodedToken.exp && decodedToken.exp - moment().unix() < 10) {
        
//     //     const refreshToken = localStorage.getItem("refreshToken") ?? "";
//     //     const refreshResponse = await axios.post("https://kunasyl-backender.org.kg/token/refresh/", {
//     //       refresh: refreshToken
//     //     });
//     //     const newAccessToken = refreshResponse.data.access;
//     //     console.log(newAccessToken, "acces token, line 61")
//     //     localStorage.setItem("accessToken", newAccessToken);
//     //   } else {
        
//     //   }
//       return response.data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.response.data.errors);
//     }
//   }
// );

// export const logout = createAsyncThunk("auth/logout", 
//      async ({refreshToken}, thunkAPI) => {
//         try{
//             const response = await axios.post("https://kunasyl-backender.org.kg/logout/", {
//             refresh: refreshToken
//             });
//             return response;
//         }catch(err){
//             console.error("Logout failed:", err);
//             throw err; 
//         }
// });

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
      })
    //   .addCase(login.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(login.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.currentUser = action.payload;
    //   })
    //   .addCase(login.rejected, (state) => {
    //     state.isLoading = false;
    //   })
    //   .addCase(getCurrentUser.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(getCurrentUser.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.currentUser = action.payload;
    //   })
    //   .addCase(getCurrentUser.rejected, (state) => {
    //     state.isLoading = false;
    //     state.currentUser = null;
    //   })
    //   .addCase(logout.fulfilled, (state) => {
    //     state.isLoading = false;
    //     state.currentUser = null;
    //   })
    //   .addCase(setEmail, (state, action) => {
    //     state.email = action.payload;
    //   });
  },
});

export default authSlice.reducer;