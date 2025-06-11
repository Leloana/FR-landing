import './Equipe.css';
import {  funcionarios, getImagem } from '../../data/funcionario';
import logoPreto from '../../assets/logo-preto.png'

export default function Equipe() {
  return (
    <div className="equipe-container">
      <img src={logoPreto} alt="Logo" className="equipe-logo" />
      <div className="equipe-grid">
        {funcionarios.map((pessoa) => (
          <a
            href={`/equipe/${pessoa.id}`}
            key={pessoa.id}
            className="equipe-card"
          >
            
            <img
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
