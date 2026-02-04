import BtnComprar from "./BtnComprar"
import Pareja from '../assets/img/promocion2.png'



const PromocionUno = () => {
  return (
    <section className="  flex flex-col justify-center items-center pt-10 lg:pt-20 ">
      <div className="flex justify-center">
        <img src={Pareja} alt="parejas" className="mask-[linear-gradient(black_30%,transparent)] w-2/3"/>
      </div>

      <div>
        <BtnComprar />
      </div>
    </section>
  )
}

export default PromocionUno


