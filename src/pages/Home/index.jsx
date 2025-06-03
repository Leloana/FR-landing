import Ajuda from './components/Ajuda'
import Info from './components/Info'
import './Home.css'

export default function Home() {
  return (
    <>
      <main className="main-content">
        <Ajuda />
        <Info />
      </main>
    </>
  )
}
