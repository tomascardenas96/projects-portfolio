import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="home" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
