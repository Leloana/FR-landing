import './FaixaAtendimento.css'

export default function FaixaAtendimento() {
  const whatsappURL = 'https://api.whatsapp.com/send/?phone=5514998689481&text=' +
    encodeURIComponent('Desejo Atendimento por Video Chamada')

  return (
    <div className="faixa-atendimento">
      <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
        CLIQUE PARA ATENDIMENTO POR VÍDEO CHAMADA
      </a>
    </div>
  )
}
