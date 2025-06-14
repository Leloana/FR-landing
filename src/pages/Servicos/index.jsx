import { useParams } from 'react-router-dom'
import { servicos, getImagem } from '../../data/servicos'
import BotaoWhatsapp from '../../components/BotaoWhatsapp'
import { Link } from 'react-router-dom'
import Destaque from './components/Destaque';  // Importando o componente Destaque
import './Servicos.css'

export default function PaginaServicos() {
  const { servicoId } = useParams()
  const servico = servicos.find(a => a.id === servicoId)
  console.log(servico.caminhoFoto)
  if (!servico) {
    return <p>Serviço não encontrado.</p>
  }

  return (
    <div className="pagina-servico">
      <Destaque 
        imagem={getImagem(servico.caminhoFoto)} 
        titulo={servico.titulo} 
        descricao={servico.descricao} 
        mensagem={servico.mensagem}
      />
      
      <aside className="servico-index">
        <h3>Outros serviços</h3>
        <ul>
            {servicos.map(s => (
                <li key={s.id}>
                <Link
                    to={`/servico/${s.id}`}
                    style={{
                    fontWeight: s.id === servicoId ? 'bold' : 'normal',
                    color: s.id === servicoId ? 'var(--cor--principal)' : 'inherit'
                    }}
                >
                    {s.titulo}
                </Link>
                </li>
            ))}
        </ul>
      </aside>

      <main className="servico-conteudo">
        <div className="frase-efeito">Temos a expertise que você precisa</div>
        <h1>{servico.titulo}</h1>
            <p>{servico.descricao}</p>
            {servico.detalhes && (
            <div className="texto-detalhado">
                {servico.detalhes.split('\n').map((linha, i) => (
                <p key={i}>{linha}</p>
                ))}
            </div>
            )}
            <BotaoWhatsapp texto={servico.textowhats} mensagem={servico.mensagem} />
      </main>
    </div>
  )
}
