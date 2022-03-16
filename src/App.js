import React, {useState} from "react";
import Navigation from './Navbar/navbar.js';
import './App.css';

function App() {
  const { visible } = Navigation();

  return (
    <div>
      <Navigation />
    </div>
  );
}

export default App;
