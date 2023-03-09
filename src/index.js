import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserProvider } from './context/UserContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignlePage from './pages/SignlePage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='product/:id' element={<SignlePage />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
