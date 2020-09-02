import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';

import './styles.css';

export default function Navbar() {
  return (
    <header className="navbar">
      <img src={logo} alt="BlindChess" />

      <nav>
        <Link className="navbar-link" to="/">
          Inicio
        </Link>

        <Link className="navbar-link" to="/resume">
          Resumo
        </Link>

        <Link className="navbar-link" to="/images">
          Imagens
        </Link>

        <Link className="navbar-link" to="/members">
          Membros
        </Link>

        <Link className="navbar-link" to="/contact">
          Contato
        </Link>
      </nav>
    </header>
  );
}