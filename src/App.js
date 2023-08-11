import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Search from "./component/Search/Search";
import Home from "./component/Home/Home";
import LinkedInPage from "./component/User/LinkedInPage";
import { LinkedInCallback } from "react-linkedin-login-oauth2";
import PageNotFound from './component/NotFound/PageNotFound';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [authToken, setAuthToken] =  useState(false);

  useEffect(() => {
    // Check if the user was previously signed in (using local storage)
    const storedSignInStatus = localStorage.getItem("isSignedIn");
    if (storedSignInStatus === "true") {
      setIsSignedIn(true);
    }
  }, []);

  const handleSignInStatus = (status) => {
    setIsSignedIn(status);
    localStorage.setItem("isSignedIn", status ? "true" : "false");
    localStorage.setItem("AuthToken", authToken)
  };

  useEffect(() => {
    const storedSignInStatus = localStorage.getItem("isSignedIn");
    if (storedSignInStatus === "true") {
      setIsSignedIn(true);
    }
    
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setAuthToken(storedToken);
    }
  }, []);





  return (
    <Routes>
      {/* If signed in, show Home page. If not, redirect to login */}
      <Route
        path="/"
        element={isSignedIn ? <Home /> : <Navigate to="/login" />}
      />
      <Route
        path="/login"
        element={<LinkedInPage onSignInStatusChange={handleSignInStatus} />}
      />
      <Route path="/home" element={<Home />} />
      <Route path="/search/:query" element={<Search />} />
      <Route path="/linkedin" element={<LinkedInCallback />} />
      <Route path="*" element={<PageNotFound />} />    
      
      </Routes>
  );
}

export default App;
