import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Home from './pages/home/Home';
import Footer from './componentes/estaticos/footer/Footer';
import Login from './pages/login/Login';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>

          <Route path='/home' element={<Home />} />

          <Route path='' element={<Login />} />

          <Route path='/login' element={<Login />} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
