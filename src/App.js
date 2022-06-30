import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";

function App() {

  return (
    <>
    <Navbar/>
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/kategori" element={<Home />} />
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
