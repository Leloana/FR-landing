import Ajuda from './components/Ajuda'
import Info from './components/Info'
import Destaque from './components/Destaque'
import './Home.css'
import BotaoWhatsapp from '../../components/BotaoWhatsapp'

export default function Home() {
  return (
    <>
      <Destaque />
      <main className="main-content">
        <Ajuda />
        <Info />
      </main>
    </>
  )
}
