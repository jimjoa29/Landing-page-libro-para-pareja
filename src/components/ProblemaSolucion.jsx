import Problema from '../assets/img/problemas.webp'
import Solucion from '../assets/img/solucion.webp'

const Problemasolucion = () => {
  return (
    <section className="flex justify-center w-full h-full bg-gray-950">
      <div><img src={Problema} alt="" className=' w-auto h-full' /></div>

      <div><img src={Solucion} alt="" className='w-auto  h-full ' /></div>
    </section>
  )
}

export default Problemasolucion
