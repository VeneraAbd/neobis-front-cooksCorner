import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://cookscorner-production-6571.up.railway.app/api/v1/auth",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
  }
});

let refresh = false;

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
        const originalRequest = error.config;
        const refreshToken = localStorage.getItem('refreshToken');
        console.log("refresh token", refreshToken);

        if(error.response.status === 401 && !refresh){ //If both conditions are met, 
            refresh = true;                           //it sets refresh to true 

            try{
                const response = await instance.post("/token/refresh/",{ //and attempts to refresh the access token by sending a POST request to the /auth/token/refresh/ endpoint with the refresh token.
                   refreshToken
                });
              
                if(response.status === 200){ //If the token refresh is successful (status 201), 
                    const newAccessToken = response.data.accessToken;  
                    localStorage.setItem("accessToken", newAccessToken) //it updates the access token in the local storage
                    console.log("Access Token", newAccessToken);

                    originalRequest.headers.Authorization = `Bearer ${newAccessToken}`; //modifies the Authorization header of the original request to include the new access token, and re-sends the original request using the instance() method.
                    return instance(originalRequest);
                }
            }catch(refreshError){ //If the token refresh fails, it logs an error message and throws the error.
                console.log("Refresh token failed", refreshError);
                throw refreshError;
            }finally{ //Finally, it sets refresh back to false.
                refresh = false;
            }
        }

        return Promise.reject(error) //If the response status is not 401 or if the refresh token request fails, the interceptor rejects the promise, causing the original request to fail with the same error.
  }
);

const initialState = {
  currentUser: undefined,
  isLoading: false,
  email: null,
  accessToken: null,
  refreshToken: null,
};

export const register = createAsyncThunk(
  "auth/register",
  async ({ email, name, password, confirmPassword }, thunkAPI) => {
    try {
      const response = await instance.post("/register", {
        email,
        name,
        password,
        confirmPassword,
      });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.errors);
    }
  }
);

// export const login = createAsyncThunk(
//   "auth/login",
//   async ({ email, password }) => {
//     try {
//       const response = await axios.post("https://cookscorner-production-6571.up.railway.app/api/v1/auth/login", {
//          email, password 
//       });

//       localStorage.setItem("refreshToken", response.data.refreshToken);
//       localStorage.setItem("accessToken", response.data.accessToken);
//       return response.data;
//     } catch (err) {
//       return Promise.reject(err.response.data.errors);
//     }
//   }
// );

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    const response = await instance.get("/logout", {});
    return response;
  } catch (err) {
    console.error("Logout failed:", err);
    throw err;
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      state.currentUser = null;
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
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
      // .addCase(login.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(login.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.currentUser = action.payload;
      //   state.accessToken = localStorage.getItem("accessToken");
      //   state.refreshToken = localStorage.getItem("refreshToken");
      // })
      // .addCase(login.rejected, (state) => {
      //   state.isLoading = false;
      // })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.currentUser = null;
      })
      // .addCase(setEmail, (state, action) => {
      //   state.email = action.payload;
      // });
  },
});

export default authSlice.reducer;



// import { createAsyncThunk, createSlice, createAction  } from "@reduxjs/toolkit";
// import axios from "axios";
// import { store } from "../../index"
// export const setEmail = createAction('auth/setEmail');

// const accessToken = localStorage.getItem("accessToken");
// const refreshToken = localStorage.getItem("refreshToken");

// const instance = axios.create({  //The create() method allows you to create a customized instance of Axios with default configuration options.
//     baseURL: "https://cookscorner-production-6571.up.railway.app/api/v1/auth/",  //I need baseUrl here
//     headers:{  //The headers object contains the request headers. Here, it sets the Content-Type to application/json and includes the access token in the Authorization header using the Bearer authentication scheme.
//     },
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${accessToken}`
// })
// let refresh = false;
// // Axios interceptors are functions that Axios calls for every request and response. They can be used to modify requests or responses before they are sent or received.
// instance.interceptors.response.use( //an interceptor is added to the Axios instance to handle responses. It intercepts any responses and executes the provided callback functions based on whether the response was successful or not
//     (response) => response,         //The interceptor function takes two parameters: (response) and async (error) => { ... }.
//     async (error) => {        //Inside the error callback function, it checks if the response status is 401 (Unauthorized) and if the refresh flag is false.
//         const originalRequest = error.config;
//         const refreshToken = localStorage.getItem('refreshToken');
//         console.log("refresh token", refreshToken);

//         if(error.response.status === 401 && !refresh){ //If both conditions are met, 
//             refresh = true;                           //it sets refresh to true 

//             try{
//                 const response = await instance.post("/token/refresh/",{ //and attempts to refresh the access token by sending a POST request to the /auth/token/refresh/ endpoint with the refresh token.
//                     refresh: refreshToken,
//                 });
//                 if(response.status === 201){ //If the token refresh is successful (status 201), 
//                     const newAccessToken = response.data.accessToken;  
//                     localStorage.setItem("accessToken", newAccessToken) //it updates the access token in the local storage
//                     console.log("Access Token", newAccessToken);

//                     originalRequest.headers.Authorization = `Bearer ${newAccessToken}`; //modifies the Authorization header of the original request to include the new access token, and re-sends the original request using the instance() method.
//                     return instance(originalRequest);
//                 }
//             }catch(refreshError){ //If the token refresh fails, it logs an error message and throws the error.
//                 console.log("Refresh token failed", refreshError);
//                 throw refreshError;
//             }finally{ //Finally, it sets refresh back to false.
//                 refresh = false;
//             }
//         }

//         return Promise.reject(error) //If the response status is not 401 or if the refresh token request fails, the interceptor rejects the promise, causing the original request to fail with the same error.
//     }
// );

// const initialState = {
//   currentUser: undefined,
//   isLoading: false,
//   email: null,
//   accessToken: null,
//   refreshToken: null,
// };

// export const register = createAsyncThunk(
//   "auth/register",
//   async ({ email, name, password, confirmPassword }, thunkAPI) => {
//     try {
//       const response = await instance.post("register", {
//         email, name, password, confirmPassword
//       });
//       return response.data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.response.data.errors);
//     }
//   }
// );

// export const login = createAsyncThunk(
//   "auth/login",
//   async ({ email, password }) => {
//     try {
//       const response = await instance.post(
//         "login",
//         { email, password }
//       );
//       localStorage.setItem("refreshToken", response.data.refreshToken);
//       localStorage.setItem("accessToken", response.data.accessToken);
//       return response.data;
//     } catch (err) {
//       return Promise.reject(err.response.data.errors);
//     }
//   }
// );


// export const logout = createAsyncThunk("auth/logout", 
//      async ({refreshToken}, thunkAPI) => {
//         try{
//             const response = await instance.get(
//               "logout", {});
//             return response;
//         }catch(err){
//             console.error("Logout failed:", err);
//             throw err; 
//         }
// });

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     logout(state) {
//       localStorage.removeItem("accessToken");
//       localStorage.removeItem("refreshToken");
//       state.currentUser = null;
//       state.accessToken = null;
//       state.refreshToken = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(register.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(register.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.currentUser = action.payload;
//       })
//       .addCase(register.rejected, (state) => {
//         state.isLoading = false;
//       })
//       .addCase(login.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.currentUser = action.payload;
//         state.accessToken = localStorage.getItem("accessToken");
//         state.refreshToken = localStorage.getItem("refreshToken");
//       })
//       .addCase(login.rejected, (state) => {
//         state.isLoading = false;
//       })
//       .addCase(logout.fulfilled, (state) => {
//         state.isLoading = false;
//         state.currentUser = null;
//       })
//       .addCase(setEmail, (state, action) => {
//         state.email = action.payload;
//       });
//   },
// });

// export default authSlice.reducer;