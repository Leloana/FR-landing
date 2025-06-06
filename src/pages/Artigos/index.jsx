import './Artigos.css';
import { artigos } from '../../data/artigos';
import { Link } from 'react-router-dom';
import logoPreto from '../../assets/logo-preto.png'
export default function Artigos() {
  return (
    <div className="artigos-container">
      <img src={logoPreto} alt="Logo" className="equipe-logo" />

      <div className="artigos-grid">
        {artigos.map(artigo => (
          <Link to={`/artigos/${artigo.id}`} key={artigo.id} className="artigo-card-link">
            <div className="artigo-card">
              <h2>
                {artigo.titulo.length > 60
                    ? artigo.titulo.slice(0, 60) + '...'
                    : artigo.titulo}
                </h2>
              <p className="artigo-autores"><strong>Autores:</strong> {artigo.autores.join(', ')}</p>
              <p className="artigo-area"><strong>Área:</strong> {artigo.area}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
