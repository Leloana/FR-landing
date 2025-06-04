import './Sobre.css'
import sobreImg from '../../assets/fundadores.jpg' // troque para o caminho real da imagem

export default function Sobre() {
  return (
    <section className="sobre">
      <div className="sobre-texto">
        <h1>Uma breve história</h1>
        <h2>advogando desde 2002</h2>
        <p>
          Fundado em 2002, nosso escritório tem sua raiz em Taquarituba/SP. Aqui, nossa equipe se dedica a atender diversas áreas do direito, com especial destaque para o Direito Previdenciário.

          Em 2021, expandimos para Londrina/PR, levando nossa expertise para mais pessoas. Oferecemos assessoria jurídica completa, tanto administrativa quanto jurídica-contenciosa.

          Em 2024, abrimos mais uma filial na cidade de Taguaí/SP, visando maior acesso e o bem estar dos nossos clientes da região.

          Nossa equipe é multidisciplinar, atendendo várias especialidades do direito como Consumidor, Penal, Civil, Trabalhista, sempre com excelência. Mas nosso coração bate mais forte pelo Direito Previdenciário.

          Sócios – Fundadores
          Dr. Antonio – graduado no ano de 1996 pela Universidade Estadual de Londrina e Pós Graduado no ano de 1999 pela FEMPAR.

          Dra. Gorete – graduada no ano de 2006, pela Unifil, pós graduada em Direito Civil e Processo Civil no ano de 2010 pela LFG, pós graduada em Direito Previdenciário pela Escola Paulista de Direito em 2018.
        </p>
      </div>
      <div className="sobre-imagem">
        <img src={sobreImg} alt="História do escritório" />
      </div>
    </section>
  )
}
