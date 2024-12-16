import { useState } from "react"
import { BtnCheckBoxFiltter } from "../../../common/button/BtnCheckboxFiltter"


export const FiltterProducts = ({ nombreFiltro = '', options = [], onSelectedOptionsChange = null }) => {

    const [selectedOption, setSelectedOption] = useState([]);

    const handleCheckboxChange = (event) => {
        const option = event.target.value;
        const newSelectedOption = selectedOption === option ? '' : option;
        setSelectedOption(newSelectedOption);
        onSelectedOptionsChange(nombreFiltro, newSelectedOption ? [newSelectedOption] : []);
    };




    return (
        <div className="bg-gray-100 rounded-lg py-5">
            <h4 className="text-center uppercase mb-2 underline text-lg">{nombreFiltro}</h4>
            <div className="flex flex-col gap-2">
                {
                    options?.map((item, index) => (
                        <BtnCheckBoxFiltter
                            key={index}
                            item={item.nombre}
                            checked={selectedOption === item.nombre}
                            onChange={handleCheckboxChange}
                        />
                    ))
                }
            </div>
        </div>
    )
}