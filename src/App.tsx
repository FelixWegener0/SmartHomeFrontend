import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './screens/MainPage';
import { GraphPage } from './screens/GraphPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/graph' element={<GraphPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
