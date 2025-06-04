import './Equipe.css';
import { funcionarios } from '../../data/funcionario';

export default function Equipe() {
  return (
    <div className="equipe-container">
      <p className="equipe-descricao">
        Nossos advogados são altamente qualificados e acessíveis. Nosso tamanho permite que nossos sócios deem atenção pessoal a cada caso.
      </p>

      <div className="equipe-grid">
        {funcionarios.map((pessoa) => (
          <a
            href={`/perfil/${pessoa.id}`}
            key={pessoa.id}
            className="equipe-card"
          >
            <img
              src={pessoa.caminhoFoto}
              alt={pessoa.nome}
              className="equipe-imagem"
            />
            <span className="equipe-nome">{pessoa.nome}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
