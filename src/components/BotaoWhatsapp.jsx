import './BotaoWhatsapp.css'
import { FaWhatsapp } from 'react-icons/fa'

export default function BotaoWhatsapp({
  texto,
  mensagem = 'Olá',
  numero = '5514998689481'
}) {
  const url = `https://api.whatsapp.com/send/?phone=${numero}&text=${encodeURIComponent(mensagem)}`
  const temTexto = Boolean(texto)

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`botao-whatsapp ${!temTexto ? 'icone-apenas' : ''}`}
    >
      <FaWhatsapp className="icone-whatsapp" />
      {temTexto && <span>{texto}</span>}
    </a>
  )
}
