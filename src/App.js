import './App.css';
import Navbar from './components/Header.js';
import Home from './pages/home/Home.js';
import { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  const [viewImage] = useState(true);

  return (
    <div>
       <BrowserRouter>
      <Navbar view={viewImage}/>
      <Routes>
              <Route path="/" element={<Home />}/>
              </Routes>
              </BrowserRouter>
    </div>
  );
}

export default App;
