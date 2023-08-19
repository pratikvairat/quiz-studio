import './App.css';
import './App.css'
import React from 'react';
import HomePage from './components/HomePage';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import QuizCreator from './pages/QuizCreator';
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <HomePage></HomePage>
        
      </BrowserRouter>
    </React.Fragment>

  );
}

export default App;
