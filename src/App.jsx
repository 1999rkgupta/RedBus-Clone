import React from "react";
import Footer from "./component/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogOrsign from "./component/auth/Login";
import Cancel from "./component/manageBookingPart/Cancel";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Footer />}></Route>
        <Route path="/cancel" element={<Cancel />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
