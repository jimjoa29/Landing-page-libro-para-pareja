import FondoImagenPromocion from "./components/FondoImagen"
import Cabecera from "./components/Cabecera"
import Problemasolucion from "./components/ProblemaSolucion"
import Testimonios from "./components/Testimonios"
import Garantia from "./components/Garantia"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="">
      <Cabecera />
      <Problemasolucion />      
      <FondoImagenPromocion />
      <Testimonios />
      <Garantia />
      <Footer />
    </div>
  )
}

export default App
