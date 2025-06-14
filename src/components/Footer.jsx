import './Footer.css'
import logo from '../assets/logo.webp'
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="footer">
    <div className="footer-container">

        <div className="footer-coluna footer-logo-bloco">
            <img src={logo} alt="Logo" className="footer-logo" />
        </div>

            <div className="footer-coluna footer-info">
                
                <a href="tel:+5543991001155"><FiPhone /> (43) 99100-1155 - Londrina </a>
                <a href="tel:+551437621411"><FiPhone /> (14) 3762-1411 - Taquarituba fixo </a>
                <a href="tel:+5514998118954"><FiPhone /> (14) 99811-8954 - Taguai </a>
                
                <a href="https://api.whatsapp.com/send/?phone=5514991122334&text=Olá" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp /> (43) 99100-1155 - Londrina
                </a>
                <a href="https://api.whatsapp.com/send/?phone=5514996785523&text=Olá" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp />  (14) 99678-5523 - Taquarituba
                </a>
                <a href="https://api.whatsapp.com/send/?phone=5514998118954&text=Olá" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp />  (14) 99811-8954 - Taguai
                </a>                
                
                <a href="mailto:contato@ferreiraramos.adv.br"><FiMail /> contato@ferreiraramos.adv.br</a>
            </div>

            <div className="footer-coluna footer-info">
                <a href="https://www.google.com/maps?q=Taquarituba,+Rua+Firmino+Gabriel+da+Luz,+244" target="_blank" rel="noopener noreferrer">
                    <FiMapPin />
                    <span className="map-text">
                        <strong>Taquarituba - SP</strong><br />
                        Rua Firmino Gabriel da Luz, 244, Centro.
                    </span>
                </a>

                <a href="https://www.google.com/maps?q=Taguaí,+Rua+Arcangelo+Gabriel,+585" target="_blank" rel="noopener noreferrer">
                    <FiMapPin />
                    <span className="map-text">
                        <strong>Taguaí - SP</strong><br />
                        Rua Arcangelo Gabriel, 585, centro
                    </span>
                </a>

                <a href="https://www.google.com/maps?q=Londrina,+Rua+Pará,+1155" target="_blank" rel="noopener noreferrer">
                    <FiMapPin />
                    <span className="map-text">
                        <strong>Londrina - PR</strong><br />
                        Rua Pará, 1155 - Centro.
                    </span>
                </a>
            </div>

    </div>

    <div className="footer-copy">
        © {new Date().getFullYear()} Ferreira & Ramos Advocacia e Consultoria. Todos os direitos reservados.
    </div>
    </footer>
  )
}



