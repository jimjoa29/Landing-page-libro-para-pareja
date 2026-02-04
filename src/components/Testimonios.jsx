import Cristina from '../assets/img/cristina.png'
import Jean from '../assets/img/jean.png'
import Jazmin from '../assets/img/jazmin.png'



const Testimonios = () => {
  return (
    <section className="w-full py-20  lg:pb-20 px-10 bg-[#171717] bg-[radial-gradient(circle,#_0%,#2a0808_100%)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.3] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      <h2 className='text-white text-center text-3xl pb-10  lg:text-6xl lg:pb-20 uppercase'>Testimonios</h2>

      <div className=' w-full flex flex-wrap gap-20 justify-center '>
        <img src={Cristina} alt="" className='w-auto h-auto' />
        <img src={Jean} alt="" className='w-auto h-auto' />
        <img src={Jazmin} alt="" className='w-auto h-auto' />
      </div>

     

    </section>
  )
}

export default Testimonios