import './Equipe.css';
import { funcionarios } from '../../data/funcionario';

export default function Equipe() {
  return (
    <div className="equipe-container">
      <h1>Ferreira&Ramos</h1>
      <p className="equipe-descricao">
        Nossos advogados são  <strong>altamente qualificados e acessíveis</strong> . Nosso tamanho permite que nossos sócios deem atenção pessoal a cada caso.
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
