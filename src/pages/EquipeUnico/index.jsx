import { useParams } from 'react-router-dom';
import { funcionarios } from '../../data/funcionario';
import { FaGraduationCap, FaQuoteLeft } from 'react-icons/fa';
import './EquipeUnico.css';
import BotaoWhatsapp from '../../components/BotaoWhatsapp';

export default function EquipeUnico() {
  const { pessoaId } = useParams(); // Obtém o ID da pessoa via URL
  console.log(pessoaId);
  const pessoa = funcionarios.find(p => p.id === pessoaId); // Encontra o membro da equipe com base no ID

  if (!pessoa) {
    console.log(pessoaId)
    return <p>Funcionário não encontrado.</p>;
  }

  return (
    <div className="equipe-unico-container">
      <h1>{pessoa.nome}</h1>
      <div className="equipe-unico-foto">
        <img src={pessoa.caminhoFoto} alt={pessoa.nome} />
      </div>
      
      <div className="equipe-unico-info">

        <div className="equipe-unico-frase">
          <FaQuoteLeft className="icone-frase" />
          <p>{pessoa.frase}</p>
        </div>

        <div className="equipe-unico-academico">
          <FaGraduationCap className="icone-academico" />
          <p>{pessoa.academico}</p>
        </div>
      </div>
      <BotaoWhatsapp texto = {'Falar com '+ pessoa.nome} mensagem = {'Olá, gostaria de falar com ' + pessoa.nome}/>
    </div>
  );

}
