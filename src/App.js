import './App.css';
import React, { useRef } from 'react';
import Inputs from './components/Inputs.js';
import Header from './components/Header.js';
import Baixe from './components/Baixe.js';
import Resultados from './components/Resultados';

function App() {
  return (
    <div className="App">
      <Header/> 
      <Inputs/>
      <Baixe/>
      <Resultados/>
    </div>
  )
}

export default App;
