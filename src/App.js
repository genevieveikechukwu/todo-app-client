import React from "react";
import {Route, Routes } from "react-router-dom";
import "./App.css";


import Home from "./components/home";
import Register from "./components/signUp";
import Login from "./components/signIn";


function App() {
  // const user = localStorage.getItem("token")
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Register/>} />
          <Route path="/signin" element={<Login/>} />
    
        </Routes>
      </div>

    </>
  )
}

export default App;
