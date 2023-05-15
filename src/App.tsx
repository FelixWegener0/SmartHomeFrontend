import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainPage } from './components/MainPage/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LicensePage } from './components/LicensePage/LicensePage';
import { NativeBaseProvider } from 'native-base';

function App() {
  return (
    <div className="App">
      <NativeBaseProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/license' element={<LicensePage />} />
          </Routes>
        </BrowserRouter>
      </NativeBaseProvider>
    </div>
  );
}

export default App;
