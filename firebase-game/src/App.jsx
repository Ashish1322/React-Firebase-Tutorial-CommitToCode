/* eslint-disable react/no-children-prop */
import "./App.css";

import Signup from "./components/Signup";
import Login from "./components/Login";
import ForgetPassword from "./components/ForgetPassword";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import AuthContextProviderMain from "./AuthContext";
function App() {
  return (
    <AuthContextProviderMain>
      <div>
        <h2>Firebase Auth Tutorials: Commit To Code</h2>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </AuthContextProviderMain>
  );
}

export default App;
