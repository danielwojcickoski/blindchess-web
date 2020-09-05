import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';

import './styles.css';

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/">
        <img src={logo} alt="BlindChess" />
      </Link>

      <nav>
        <Link className="navbar-link" to="/">
          Inicio
        </Link>

        <Link className="navbar-link" to="/project">
          Projeto
        </Link>

        <Link className="navbar-link" to="/images">
          Imagens
        </Link>

        <Link className="navbar-link" to="/contact">
          Contato
        </Link>
      </nav>
    </header>
  );
}