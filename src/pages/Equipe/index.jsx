import './Equipe.css';
import { funcionarios } from '../../data/funcionario';
import logoPreto from '../../assets/logo-preto.png'

export default function Equipe() {
  return (
    <div className="equipe-container">
      <img src={logoPreto} alt="Logo" className="equipe-logo" />
      <div className="equipe-grid">
        {funcionarios.map((pessoa) => (
          <a
            href={`/perfil/${pessoa.id}`}
            key={pessoa.id}
            className="equipe-card"
          >
            <img
              src={pessoa.caminhoFoto + ".jpg"}
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
