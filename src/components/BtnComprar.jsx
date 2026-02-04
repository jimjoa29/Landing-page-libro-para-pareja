import Btncomprar from '../assets/img/btncomprar.png'
import Precio from './Precio'

const BtnComprar = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center pt-10">  
      <a href="https://jimjoa.gumroad.com/l/rescate-de-emergencia">
        <img src={Btncomprar} className='hover:opacity-80 w-full md:w-auto px-8 py-4 text-lg
                                        h-auto cursor-pointer transition-transform duration-300 hover:scale-110 animate-bounce 
        '/>
      </a>

      <Precio />
    </div>
  )
}

export default BtnComprar
