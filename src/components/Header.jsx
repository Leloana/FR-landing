import { Link } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/logo.png'
import './Header.css'

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo-img" />
      </Link>

      <button
        className="menu-toggle"
        onClick={() => setMenuAberto(!menuAberto)}
        aria-label="Abrir menu"
      >
        ☰
      </button>

      <nav className={`nav-links ${menuAberto ? 'ativo' : ''}`}>
        <Link to="/" onClick={() => setMenuAberto(false)}>Home</Link>
        <Link to="/sobre" onClick={() => setMenuAberto(false)}>Sobre</Link>
        <Link to="/equipe" onClick={() => setMenuAberto(false)}>Equipe</Link>
        <Link to="/oque-fazemos" onClick={() => setMenuAberto(false)}>O que fazemos</Link>
        <Link to="/artigos" onClick={() => setMenuAberto(false)}>Artigos</Link>
      </nav>
    </header>
  )
}
