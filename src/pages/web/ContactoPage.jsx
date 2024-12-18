import { ContactoPrincipal } from "../../components/features/web/contacto/ContactoPrincipal"
import { FormularioContacto } from "../../components/features/web/contacto/FormularioContacto"
import { TextoContacto } from "../../components/features/web/contacto/TextoContacto"
import { UbicacionContacto } from "../../components/features/web/contacto/UbicacionContacto"


export const ContactoPage = () => {
    return (
        <div>
            <TextoContacto />
            <ContactoPrincipal />
            <FormularioContacto />
            <UbicacionContacto />
        </div>
    )
}