import Contenido from "./Contenido"
import PromocionUno from "./PromocionUno"

const FondoImagenPromocion = () => {
    return (
        <section className="w-full flex flex-col justify-center items-center py-20 bg-[#4a1010] bg-[radial-gradient(circle,#_0%,#2a0808_100%)] relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.3] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

            <Contenido />
            <PromocionUno />

            

        </section>
    )
}

export default FondoImagenPromocion