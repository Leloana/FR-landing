import './Destaque.css';
import BotaoWhatsapp from '../../../components/BotaoWhatsapp'; // Supondo que você já tenha o BotaoWhatsapp pronto
import logoBranco from '../../../assets/logo-branco.png'

export default function Destaque() {
  return (
    <div className="destaque-container">
       <div className="background-image"></div>
      <div className="content">
        <img src={logoBranco} alt="Logo" className="destaque-logo" />
        <h1>Advocacia Especializada em Direito Previdenciário</h1>
        <p>Conte com nosso time de advogados experientes para obter o seu melhor benefício previdenciário.</p>
        <BotaoWhatsapp texto="Clique aqui para atendimento" mensagem="Olá, gostaria de saber mais sobre benefícios previdenciários." />
      </div>
    </div>
  );
}
