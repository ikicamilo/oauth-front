import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Loginpage from "./Components/Loginpage/Loginpage";
import NavBar from "./Components/NavBar/NavBar";
import "./GlobalStyles.css";
import { myContext } from "./Context";

function App() {
  const userObject = useContext(myContext);
  console.log(userObject);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
