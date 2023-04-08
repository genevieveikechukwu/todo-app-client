import React from "react";
import {Route, Routes, Navigate } from "react-router-dom";
import "./App.css";


import Home from "./components/home";
import Register from "./components/signUp";
import Login from "./components/signIn";


function App() {
  const user = localStorage.getItem("token")
  return (
    <>
      <div className="App">
        <Routes>
          {user && <Route path="/" exact element={<Home />} />}
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login/>} />
          <Route path="/" exact element={<Navigate replace to ="/signin"/>} />
    
        </Routes>
      </div>

    </>
  )
}

export default App;
