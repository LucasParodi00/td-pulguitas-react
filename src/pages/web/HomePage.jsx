import { Carrusel } from "../../components/common/Carrusel"
import { ButtonsPets } from "../../components/features/web/ButtonsPets"
import { ContainerWeb } from "../../components/layout/ContainerWeb"

const imagenes = ['http://localhost:5173/banner-lg-1.png', 'http://localhost:5173/banner-lg-2.png']

export const HomePage = () => {
    return (
        <>
            <Carrusel
                imagenes={imagenes}
            />
            <ContainerWeb>
                <ButtonsPets />
            </ContainerWeb>
        </>
    )
}