import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LicensePage } from './Screens/LicensePage/LicensePage';
import { NativeBaseProvider } from 'native-base';
import { MainPage } from './Screens/MainPage/MainPage';

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
