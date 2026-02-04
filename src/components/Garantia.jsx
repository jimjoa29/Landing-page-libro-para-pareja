import CompraGarantizada from '../assets/img/comprargarantizada.jpg'
import BtnComprar from '../components/BtnComprar'

const Garantia = () => {
    return (
        <section className="w-full flex flex-col justify-center items-center py-20 lg:py-20 bg-[#490101] bg-[radial-gradient(circle,#_0%,#2a0808_100%)] relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.3] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

            <img src={CompraGarantizada} className='rounded-3xl w-auto ' />


          <BtnComprar />
        </section>
    )
}

export default Garantia