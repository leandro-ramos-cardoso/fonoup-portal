import React from 'react'
import AppNavbar from './components/AppNavbar.jsx'
import CarouselFono from './components/CarouselFono.jsx'
import CardsEspaco from './components/CardsEspaco.jsx'
import ConhecaFonoup from './components/ConhecaFonoup.jsx'
import QuemSouEu from './components/QuemSouEu.jsx'
import Especialidades from './components/Especialidades.jsx'
import PerguntasFrequentes from './components/PerguntasFrequentes.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div>
      <AppNavbar />
      <CarouselFono />
      <CardsEspaco />
      <ConhecaFonoup />
      <QuemSouEu />
      <Especialidades />
      <PerguntasFrequentes />
      <Footer />
    </div>
  )
}

export default App