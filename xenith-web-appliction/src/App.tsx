import React from "react";
import Navbar from "./components/navbar";
import { useNavbarAnimation } from "./components/ts/navbaranimation"; // Import animation hook
import "./App.css";
import "./styles/global.css";



function App() {
  useNavbarAnimation(); 

  return (
    <main className="App">
      <Navbar />
    </main>
  );
}

export default App;
