import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from './component/Search/Search';
import Home from './component/Home/Home';
function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/search/:query" element={<Search  />}></Route>
        </Routes>
    </>
  );
}

export default App;
