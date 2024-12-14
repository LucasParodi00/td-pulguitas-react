import { Cat } from "lucide-react"
import { LinkButtonRounded } from "../../common/button/LinkButtonRounded"
import { Dog } from "lucide-react"
import { Fish } from "lucide-react"
import { Bird } from "lucide-react"
import { SubTitle } from "../../common/texto/SubTitle"




export const ButtonsPets = () => {
    return (
        <div className="flex flex-col gap-5 py-2">
            <div className="flex gap-2 justify-between lg:justify-around overflow-auto scroll-oculto">
                <LinkButtonRounded
                    icono={<Cat className=" w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />}
                />
                <LinkButtonRounded
                    icono={<Dog className=" w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />}
                />
                <LinkButtonRounded
                    icono={<Fish className=" w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />}
                />
                <LinkButtonRounded
                    icono={<Bird className=" w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />}
                />
            </div>
        </div>
    )
}