import Problema from '../assets/img/problema.svg'
import Solucion from '../assets/img/solucion.svg'

const Problemasolucion = () => {
  return (
    <section className="flex flex-col md:flex-row ">
      <div><img src={Problema} alt="" /></div>

      <div><img src={Solucion} alt="" /></div>
    </section>
  )
}

export default Problemasolucion
