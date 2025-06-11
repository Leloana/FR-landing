import './Equipe.css';
import {  funcionarios, getImagem } from '../../data/funcionario';
import logoPreto from '../../assets/logo-preto.webp'
import Imagem from '../../components/Imagem';

export default function Equipe() {
  return (
    <div className="equipe-container">
      <Imagem src={logoPreto} alt="Logo" className="equipe-logo" />
      <div className="equipe-grid">
        {funcionarios.map((pessoa) => (
          <a
            href={`/equipe/${pessoa.id}`}
            key={pessoa.id}
            className="equipe-card"
          >
            
            <Imagem
              src={getImagem(pessoa.caminhoFoto)}
              alt={pessoa.nome}
              className="equipe-imagem"
            />
            <span className="equipe-nome">{pessoa.nome + " - " + pessoa.funcao} </span>
          </a>
        ))}
      </div>
    </div>
  );
}
