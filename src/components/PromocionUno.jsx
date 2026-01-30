import BtnComprar from "./BtnComprar"
import Pareja from '../assets/img/promocion.png'
import Fondo from '../assets/img/fondopp.jpg'


const PromocionUno = () => {  
  return (
    <section className=" flex flex-col justify-center items-center pt-60 pb-20"
             style={{ backgroundImage: `url(${Fondo})` }}
    >
      <div>
        <img src={Pareja} alt="" className="[mask-image:linear-gradient(black_30%,transparent)] 
                                            w-3xl
        "/>
      </div>

      <div>
        <BtnComprar />
      </div>
    </section>
  )
}

export default PromocionUno


