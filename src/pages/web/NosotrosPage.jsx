import { CardImgDerechaText, CardImgIzquierdaText } from "../../components/common/card/ImgCardText"
import { Presentacion } from "../../components/features/web/nosotros/Presentacion"
import { ContainerWeb } from "../../components/layout/ContainerWeb"
import { textoCardMision, textoCardVision } from "../../utils/helper/textos"




export const NosotrosPage = () => {
    return (
        <div>
            <ContainerWeb>
                <Presentacion />
                <CardImgIzquierdaText
                    imagen={'/card/card-gato.webp'}
                    parrafo={textoCardMision}
                    titulo="MISION"
                />

                <CardImgDerechaText
                    imagen={'/card/card-perro.webp'}
                    parrafo={textoCardVision}
                    titulo="VISION"

                />
                <div>
                    <img src="/card/banner-nosotros.webp" alt="" className="w-full" loading="lazy" />
                </div>
            </ContainerWeb>
        </div>
    )
}