import './App.css';
import Navbar from './components/Header.js';
import Home from './pages/home/Home.js';
import Season2024 from './pages/temp/Temp2024.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
 
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/2024" element={<Season2024 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
