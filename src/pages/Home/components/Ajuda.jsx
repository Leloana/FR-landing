import { FaAccessibleIcon,FaRegFileAlt, FaAngleRight ,FaCross,FaUserInjured,FaSearchDollar } from 'react-icons/fa'
import './Ajuda.css'
import { Link } from 'react-router-dom'

export default function Ajuda() {
  const opcoes = [
    { id:'aposentadoria', texto: 'Aposentadorias', icone: <FaRegFileAlt className="icone-ajuda" /> },
    { id: 'bpc-loas', texto: 'BPC-LOAS', icone: <FaAccessibleIcon className="icone-ajuda" /> },
    { id: 'auxilio-doenca', texto: 'Auxílio-acidente ou Doença', icone: <FaUserInjured  className="icone-ajuda" /> },
    { id: 'pensao-morte', texto: 'Pensão por Morte', icone: <FaCross className="icone-ajuda" /> },
    { id: 'revisao-aposentadorias', texto: 'Revisão de Aposentadorias', icone: <FaSearchDollar className="icone-ajuda" /> }
  ]

    return (
    <section className="ajuda">
        <div className="ajuda-grid" >
        {opcoes.map((item, index) => (
            <Link to={`/servico/${item.id}`} key={index} className="ajuda-item" >
              <div className="icone">{item.icone}</div>
              <span>{item.texto}</span>
              <FaAngleRight  className="icone-entrar" />
            </Link>
        ))}
        </div>
    </section>
    )
}
