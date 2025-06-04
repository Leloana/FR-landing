import { Routes, Route } from 'react-router-dom'
// Componentes fixos
import Header from './components/Header'
import Footer from './components/Footer'
import FaixaAtendimento from './components/FaixaAtendimento'
// Paginas 
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Servicos from './pages/Servicos'
import Equipe from './pages/Equipe'

export default function App() {
  return (
    <>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servico/:servicoId" element={<Servicos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/equipe" element={<Equipe />} />
        
      </Routes>
      <FaixaAtendimento />
      <Footer />
    </>
  )
}
