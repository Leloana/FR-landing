import { useParams } from 'react-router-dom';
import { funcionarios, getImagemFull } from '../../data/funcionario';
import { FaGraduationCap, FaQuoteLeft } from 'react-icons/fa';
import './EquipeUnico.css';
import BotaoWhatsapp from '../../components/BotaoWhatsapp';
import Imagem from '../../components/Imagem';

export default function EquipeUnico() {
  const { pessoaId } = useParams(); // Obtém o ID da pessoa via URL
  console.log(pessoaId);
  const pessoa = funcionarios.find(p => p.id === pessoaId); // Encontra o membro da equipe com base no ID
  console.log(pessoa.caminhoFoto)
  if (!pessoa) {
    console.log(pessoaId)
    return <p>Funcionário não encontrado.</p>;
  }

  return (
    <div className="equipe-unico-container">
      <h1>{pessoa.nome}</h1>
      <div className="equipe-unico-foto">
         <Imagem
          src={getImagemFull(pessoa.caminhoFoto)}
          alt={pessoa.nome}
          className="equipe-imagem-full"
         />
      </div>
      <BotaoWhatsapp texto = {'Falar com '+ pessoa.nome} mensagem = {'Olá, gostaria de falar com ' + pessoa.nome}/>
      
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
    </div>
  );

}
