import React from "react";
import Hero from "./assets/Component/Hero.jsx"; 
import About from "./assets/Component/About.jsx";
import SignIn from "./assets/Component/Login.jsx";
import { BrowserRouter,Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/LogIn" element={<LogIn/>} />
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
