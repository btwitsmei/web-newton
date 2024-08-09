import './App.css';
import Navbar from './components/Header.js';
import Home from './pages/home/Home.js';
import Season2024 from './pages/temp/Temp2024.js';
import Season2023 from './pages/temp/Temp2023.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/contact/Contact.js';
import Nosotros from './pages/us/Nosotros.js';
import Staff from './pages/staff/Staff.js';

function App() {
 
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/2024" element={<Season2024 />} />
          <Route path="/2023" element={<Season2023 />} />
          <Route path='/contacto' element={<Contact/>} />
          <Route path='/nosotros' element={<Nosotros/>} />
          <Route path='/staff' element={<Staff/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
