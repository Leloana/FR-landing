import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo-img" />
        </Link>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/equipe">Equipe</Link>
        <Link to="/oque-fazemos">O que fazemos</Link>
        <Link to="/artigos">Artigos</Link>
      </nav>
    </header>
  )
}
