import './OqueFazemos.css';
import { subservicos } from '../../data/subservicos';
import { FaBalanceScale, FaGavel, FaUsers, FaUserShield, FaHandshake } from 'react-icons/fa';
import BotaoWhatsapp from '../../components/BotaoWhatsapp';

const icones = {
  previdenciario: <FaUserShield />,
  trabalhista: <FaHandshake />,
  familia: <FaUsers />,
  civil: <FaBalanceScale />,
  criminal: <FaGavel />
};

export default function OqueFazemos() {
  return (
    <div className="oque-container">
      <div className="oque-grid">
        {subservicos.map(servico => (
          <div key={servico.id} className="oque-item">
            
            <div className='oque-icone-whats'>
              <div className="oque-icone">{icones[servico.id]}</div>
              <BotaoWhatsapp texto='Contate!' mensagem={'Olá quero saber mais sobre ' + servico.titulo} />
            </div>
            
            
            <h2 className="oque-nome">
              {servico.titulo}
            </h2>
            <hr className="oque-linha" />
            <ul className="oque-lista">
              {servico.subtopicos.map((sub, idx) => (
                <li key={idx}>
                  <a>{sub}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
