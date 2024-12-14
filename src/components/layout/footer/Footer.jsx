



export const Footer = () => {
    return (
        <footer className="bg-navbar-web min-h-32 lg:min-h-[400px] text-gray-200 py-10 lg:flex flex-col justify-center">
            <div className="grid gap-5 lg:grid-cols-2">
                <div className="">
                    <img
                        src="/logo.png"
                        alt="Pulguitas - PetShop - Logo"
                        className="h-28 w-full object-contain"
                    />
                    <p className="text-center text-2xl lg:text-4xl">PULGUITAS - PET SHOP</p>
                </div>
                <div className="sm:grid grid-cols-2 justify-around items-center">
                    <FooterLista
                        items={lista}
                    />
                    <FooterLista
                        items={listaRecursos}
                    />
                </div>
            </div>
            <p className="text-center font-extralight mt-2">Pulguitas - Todos los derechos reservados </p>
        </footer>
    )
}

const lista = ['Inicio', 'Productos', 'Nosotros', 'Ubicacion', 'Contacto'];
const listaRecursos = ['Reclamos', 'Trabaja con Nosotros', 'Recursos Humanos', 'Blog', 'Atencion al Publico']
const FooterLista = ({ items = [] }) => {
    return (
        <div className="text-center border-y py-5 border-gray-600 sm:border-x sm:border-y-0 border sm:px-10 lg:text-lg font-extralight">
            <ul>

                {
                    items?.map((item, index) => (
                        <li key={index} className="hover:text-blue-300">{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}