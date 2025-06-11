import './Destaque.css';
import BotaoWhatsapp from '../../../components/BotaoWhatsapp';
import logoBranco from '../../../assets/logo-branco.png';
import idosoImg from '../../../assets/idoso.png'; // <-- nova imagem importada

export default function Destaque() {
  return (
    <div className="destaque-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(255, 255, 255, 0) 10%, var(--cor--principal) 100%),
            url(${idosoImg})
          `
        }}
      ></div>

      <div className="content">
        <img src={logoBranco} alt="Logo" className="destaque-logo" />
        <h1>Advocacia Especializada em Direito Previdenciário</h1>
        <p>Conte com nosso time de advogados experientes para obter o seu melhor benefício previdenciário.</p>
        <BotaoWhatsapp
          texto="Clique aqui para atendimento"
          mensagem="Olá, gostaria de saber mais sobre benefícios previdenciários."
        />
      </div>
    </div>
  );
}
