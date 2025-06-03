import './Info.css'
import imagemEmpresa from '../../../assets/horizontal.png' // substitua pelo caminho correto
import BotaoWhatsapp from '../../../components/BotaoWhatsapp'

export default function Info() {
  return (
    <section className="info">
      <div className="info-texto">
        <h2 className="texto-principal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quos ipsa voluptatibus distinctio numquam quis dolore! Magni esse similique sequi ea incidunt. Enim eius cum repellendus, rem quaerat fugit minus?</h2>
        <p className="texto-complementar">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore distinctio suscipit ipsa nostrum, iure cum nemo id consequuntur possimus eius dicta tempora perspiciatis illum totam, minima quo ipsam architecto? Alias.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus quibusdam et excepturi ducimus dolorum culpa delectus esse 
        </p>
        <BotaoWhatsapp 
            texto="Fale Conosco!"
            mensagem="Olá, preciso de ajuda com meu atendimento!"
            numero="5514998689481"
            />
      </div>
      <div className="info-imagem">
        <img src={imagemEmpresa} alt="Imagem da empresa" />
      </div>
    </section>
  )
}
