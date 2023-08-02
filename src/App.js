import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./component/Search/Search";
import Home from "./component/Home/Home";
import LinkedInPage from "./component/LinkedIn/LinkedInPage";
import { LinkedInCallback } from "react-linkedin-login-oauth2";
function App() {
  return (
    <>
      <Routes>
        <Route path="/linkedin" element={<LinkedInCallback />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/test" element={<LinkedInPage />}></Route>
         
    
        <Route path="/search/:query" element={<Search />}></Route>
      </Routes>
    </>
  );
}

export default App;
