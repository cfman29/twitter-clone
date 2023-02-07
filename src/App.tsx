import Login from "./pages/login";
import Home from "./pages/home";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import "./main.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
