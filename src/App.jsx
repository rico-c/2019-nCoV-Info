import React from 'react';
import './App.css';

import Header from './components/header/Header.jsx';
// import Test from './components/test/Test.tsx';
import { Test } from "./components/test/Test.tsx";

function App() {
  return (
    <div className="App">
        <Header/>
        <Test compiler="TypeScript" framework="React" />
    </div>
  );
}

export default App;
