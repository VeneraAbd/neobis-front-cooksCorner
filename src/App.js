// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState, useEffect, Fragment, } from "react";
// import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
// import ProfilePage from "./pages/ProfilePage/ProfilePage";
// import HomePage from "./pages/HomePage/HomePage";
// import Layout from "./components/Layout/Layout";
// import SearchPage from "./pages/SearchPage/SearchPage";
// import SplashScreen from "./components/SplashScreen/SplashScreen";
// import RecipeDetails from "./pages/RecipeDetails/RecipeDetails";
// import { useDispatch, useSelector } from "react-redux";

// function App() {
//   const [showSplash, setShowSplash] = useState(true);
//   const dispatch = useDispatch();
//   // const auth = useSelector((state) => state.auth);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowSplash(false);
//     }, 1500);
//     return () => clearTimeout(timer);
//   }, []);
  
//   useEffect(() => {
//     // Check if tokens exist in localStorage
//     const accessToken = localStorage.getItem('accessToken');
//     const refreshToken = localStorage.getItem('refreshToken');

//     if (accessToken) {
//       // If tokens exist, dispatch action to get current user
//       // dispatch();
//     }
//   }, [dispatch]);

//   return (
//       <Routes>
//         <Route
//           path="/login"
//           element={
//             showSplash ? <SplashScreen /> : <LoginPage />
//           }
//         />
//         <Route path="/register" element={<RegistrationPage />} />
//         <Route path="/" element={<Layout />}>
//           <Route index element={<HomePage />} />
//           <Route path="search" element={<SearchPage />} />
//           <Route path="profile" element={<ProfilePage />} />
//           <Route path="recipe-details" element={<RecipeDetails/>}/>
//         </Route>
//       </Routes>
//   );
// }

// export default App;

import { useEffect } from "react";
import { Routes, Route, Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import LoginPage from "./pages/LoginPage/LoginPage";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import RecipeDetails from "./pages/RecipeDetails/RecipeDetails";
// import { login } from "../src/store/reducers/auth"; // Import the login action
import ConfirmationPage from "./pages/ConfirmationPage/ConfirmationPage";
function App() {
 

  // useEffect(() => {
  //   const accessToken = localStorage.getItem("accessToken");
  //   const refreshToken = localStorage.getItem("refreshToken");

  //   if (accessToken) {
  //     // If access token exists, dispatch login action
  //     dispatch(login({ accessToken, refreshToken }));
  //   }
  // }, [dispatch]);

  return (
    <>
      
        <Routes>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/confirmation" element={<ConfirmationPage/>}/>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="recipe-details" element={<RecipeDetails />} />
          </Route>
        </Routes>
  
    </>
    
  );
}

export default App;
