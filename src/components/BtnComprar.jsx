import Btncomprar from '../assets/img/btncomprar.png'
import Precio from './Precio'

const BtnComprar = () => {
  return (


    <div className="w-full flex flex-col justify-center items-center">      

      <a href="https://jimjoa.gumroad.com/l/rescate-de-emergencia"
        className=""
      >
        <img src={Btncomprar} alt=""
          className='hover:opacity-80 w-full md:w-auto px-8 py-4 text-lg'

        />
      </a>

      <Precio />
    </div>
  )
}

export default BtnComprar
