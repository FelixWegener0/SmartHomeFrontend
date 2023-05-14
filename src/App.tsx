import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainPage } from './components/MainPage/MainPage';
import { NativeBaseProvider } from 'native-base';

function App() {
  return (
    <div className="App">
      <NativeBaseProvider>
        <MainPage />
      </NativeBaseProvider>
    </div>
  );
}

export default App;
