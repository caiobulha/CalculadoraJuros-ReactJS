import './App.css';
import React, { useRef } from 'react';
import Inputs from './components/Inputs.js';
import Header from './components/Header.js';
import Baixe from './components/Baixe.js';
import Resultados from './components/Resultados';

function App() {
  const containerRef = useRef()
  document.body.scrollTop = -1000;
  return (
    <div className="App" ref={containerRef}>
      <Header/> 
      <Inputs/>
      <Baixe/>
      <Resultados/>
    </div>
  )
}

export default App;
