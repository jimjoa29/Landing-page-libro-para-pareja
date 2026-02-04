

const Footer = () => {
    return (
        <footer className="w-full py-10  bg-[#171717] bg-[radial-gradient(circle,#_0%,#2a0808_100%)] relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.3] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

            <div className="text-white text-center flex gap-1 justify-center ">
                <p>
                    Todos los derechos reservados por
                </p>
                <a href="https://quierorescatarmimatrimonio.site"
                   className="text-blue-600 text-"
                >                   
                        quierorescatarmimatrimonio.site
                </a>   
            </div>

        </footer>
    )
}

export default Footer