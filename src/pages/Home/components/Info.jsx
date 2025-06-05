import './Info.css'
import imagemEmpresa from '../../../assets/horizontal.png' // substitua pelo caminho correto
import BotaoWhatsapp from '../../../components/BotaoWhatsapp'

export default function Info() {
  return (
    <section className="info">
      <div className="info-texto">
        <BotaoWhatsapp 
            texto="Clique aqui para atendimento"
            mensagem="Olá, gostaria de saber mais sobre benefícios previdenciários."
            numero="5514998689481"
        />
        <h2 className="texto-principal">
          Mais de 20 anos oferecendo segurança jurídica para quem precisa.
        </h2>
        <p className="texto-complementar">
          Atuamos desde 2002 com compromisso, ética e excelência na defesa dos direitos de trabalhadores, aposentados e pessoas em situação de vulnerabilidade. Nossa missão é tornar o processo jurídico mais claro, rápido e acessível para todos.
          <br /><br />
          Conte com nossa equipe especializada para orientar você nas questões previdenciárias mais importantes da sua vida. Agende uma consultoria gratuita e descubra como podemos te ajudar.
        </p>
      </div>
      <div className="info-imagem">
        <img src={imagemEmpresa} alt="Imagem da empresa" />
      </div>
    </section>
  )
}
