import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import IsLogin from "./guards/isLogin";
import CreateArticle from "./pages/CreateArticle";
import EditArticle from "./pages/EditArticle";

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

      <Route
        path="/"
        element={
          <IsLogin>
            <Outlet />
          </IsLogin>
        }
      >
        <Route index element={<Home />} />
        <Route path="/add" element={<CreateArticle />} />
        <Route path="/edit/:articleId" element={<EditArticle />} />
      </Route>
    </Routes>
  );
}

export default App;
