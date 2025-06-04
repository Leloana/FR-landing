import './Artigos.css';
import { artigos } from '../../data/artigos';
import { Link } from 'react-router-dom';

export default function Artigos() {
  return (
    <div className="artigos-container">
      <h1 className="artigos-titulo">Ferreira&Ramos Artigos Jurídicos</h1>

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
