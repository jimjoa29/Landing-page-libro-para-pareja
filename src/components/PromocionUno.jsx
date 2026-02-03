import BtnComprar from "./BtnComprar"
import Pareja from '../assets/img/promocion2.png'



const PromocionUno = () => {
  return (
    <section className="  flex flex-col justify-center items-center pt-20 ">
      <div>
        <img src={Pareja} alt="parejas" className="mask-[linear-gradient(black_30%,transparent)]" />
      </div>

      <div>
        <BtnComprar />
      </div>
    </section>
  )
}

export default PromocionUno


