import './Destaque.css';
import BotaoWhatsapp from '../../../components/BotaoWhatsapp'; // Supondo que você já tenha o BotaoWhatsapp pronto

export default function Destaque({ imagem, titulo, descricao,mensagem }) {
  return (
    <div className="destaque-container">
      <div className="background-image" style={{ backgroundImage: `url(${imagem})` }}></div>
      <div className="content">
        <h1>{titulo}</h1>  
        <p>{descricao}</p> 
        <BotaoWhatsapp texto="Clique aqui para atendimento" mensagem= {mensagem} />
      </div>
    </div>
  );
}
