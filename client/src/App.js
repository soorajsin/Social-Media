import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Components/Account/Register";
import Login from "./Components/Account/Login";
import Nav from "./Components/Navbar/Nav";
import { ProfilePage } from "./Components/Profile/ProfilePage";
import HomePage from "./Components/Home/HomePage";
import PostPage from "./Components/Profile/POST/PostPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/post" element={<PostPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
