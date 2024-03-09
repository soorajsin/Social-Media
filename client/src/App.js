import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Components/Account/Register";
import Login from "./Components/Account/Login";
import Nav from "./Components/Navbar/Nav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
