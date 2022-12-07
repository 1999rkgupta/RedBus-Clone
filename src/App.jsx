import React from "react";
import Home from './pages/Home';
import Login from './components/auth/Login';
import Register from "./components/auth/Register";
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
import PageNotFound from './pages/PageNotFound';


const App = () => {
  return (
    <Router>
      <Navbar />
      <ToastContainer theme="dark"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
         
      </Routes>
</Router>
  );
};

export default App;
