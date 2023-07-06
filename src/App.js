
import './App.scss';
import { Routes, Route } from 'react-router-dom';

import About from './pages/About';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import Brochure from './pages/Brochure';
import NewProducts from './pages/NewProducts';

import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';


function App() {
  return (
    <main className="main-container">
      <NavigationBar />
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/brochure" element={<Brochure/>} />
        <Route path="/new-products" element={<NewProducts/>} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
