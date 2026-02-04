import Problema from '../assets/img/2.png'
import Solucion from '../assets/img/1.png'

const Problemasolucion = () => {
  return (
    <section className="w-full flex  justify-center items-center pt-20 lg:pt-20 bg-[#171717] bg-[radial-gradient(circle,#_0%,#2a0808_100%)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.3] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        
        <div><img src={Problema} alt="" className=' w-auto h-full'/></div>

        <div><img src={Solucion} alt="" className='w-auto  h-full'/></div>
        
    </section>
  )
}

export default Problemasolucion
