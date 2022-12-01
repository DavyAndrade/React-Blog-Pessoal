import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './componentes/estaticos/footer/Footer';
import Navbar from './componentes/estaticos/navbar/Navbar';
import ListaPostagem from './componentes/posts/listapostagem/ListaPostagem';
import ListaTema from './componentes/themes/listatema/ListaTema';
import CadastroUsuario from './pages/cadastro/Cadastro';
import Home from './pages/home/Home';
import Login from './pages/login/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/cadastro" element={<CadastroUsuario />} />

        <Route path="/temas" element={<ListaTema />} />

        <Route path="/posts" element={<ListaPostagem />} />

      </Routes>
      <Footer />
    </Router>

  );
}

export default App;