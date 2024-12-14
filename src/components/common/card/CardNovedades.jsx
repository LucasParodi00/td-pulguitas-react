import { Twitter } from "lucide-react"
import { Facebook } from "lucide-react"
import { Instagram } from "lucide-react"




export const CardNovedades = () => {
    return (
        <div className="bg-[#DEE6E9] py-10 px-2 my-10 lg:h-[33em] flex">
            <div className=" max-w-[1500px] m-auto sm:grid grid-cols-3 gap-6 lg:gap-20 justify-center items-center">
                <div>
                    <img
                        src="/bull-dog.jpg"
                        alt="Pulguitas pet shop banner"
                        className="h-64 object-contain m-auto sm:h-80 scale-x-[-1]"
                    />
                </div>
                <div className="text-black sm:col-span-2 flex flex-col gap-12">
                    <div className="my-5">
                        <h3 className="uppercase text-center text-3xl lg:text-5xl font-semibold text-[#009999]">Pet Shop - Pulguitas </h3>
                        <h4 className="text-center text-sm lg:text-lg">Porque tus mascotas merecen lo mejor.</h4>
                    </div>
                    <div className="font-extralight text-sm lg:text-lg">
                        <p>En Pulguitas, nos apasiona el cuidado y la felicidad de tus compañeros peludos. Aquí encontrarás alimentos, juguetes, accesorios y mucho más, seleccionados con amor y calidad.</p>
                        <br />
                        <p>¡Visítanos y descubre todo lo que tenemos para consentir a tu mejor amigo!</p>
                    </div>
                    <div className="flex items-center py-2 justify-around mt-5 lg:w-1/2 m-auto">
                        <a href="https://www.instagram.com" target="_blank" className="hover:text-navbar-web text-[#009999] duration-500 ">{<Instagram size={30} />}</a>
                        <a href="https://www.facebook.com" target="_blank" className="hover:text-navbar-web text-[#009999] duration-500 ">{<Facebook size={30} />}</a>
                        <a href="https://www.facebook.com" target="_blank" className="hover:text-navbar-web text-[#009999] duration-500 ">{<Twitter size={30} />}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}