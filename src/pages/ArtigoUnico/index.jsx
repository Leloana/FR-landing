import { useParams } from 'react-router-dom';
import { artigos } from '../../data/artigos';
import { useEffect, useState } from 'react';
import './ArtigoUnico.css' 

export default function ArtigoUnico() {
  const { artigoId } = useParams();
  const artigo = artigos.find(a => a.id === artigoId);

  const [conteudo, setConteudo] = useState('');

  useEffect(() => {
    if (artigo && artigo.conteudo) {
      fetch(artigo.conteudo)
        .then(response => response.text())
        .then(data => setConteudo(data))
        .catch(error => console.error('Erro ao carregar o arquivo:', error));
    }
  }, [artigo]);

  if (!artigo) {
    return <p>Artigo não encontrado.</p>;
  }

  return (
    <div className="artigo-unico-container">
      <h1>{artigo.titulo}</h1>
      <p><strong>Autores:</strong> {artigo.autores.join(', ')}</p>
      <p><strong>Área:</strong> {artigo.area}</p>
      <hr />
      <pre>{conteudo}</pre> {/* Exibe o conteúdo do arquivo */}
    </div>
  );
}
