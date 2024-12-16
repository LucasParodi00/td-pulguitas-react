import { MoveRight } from "lucide-react";
import { MoveLeft } from "lucide-react";
import { useState } from "react";



export const Paginator = ({ currentPage = 1, numberOfPage = 1, lastPage = null, nextPage = null, onChangeLimit = null }) => {
    const [newLimit, setNewLimit] = useState('');

    const changeLimit = (event) => setNewLimit(event.target.value);

    const handleInputKeyPress = (event) => {
        if (event.key === 'Enter') {
            onChangeLimit(newLimit);
        }
    }

    return (
        <div className="flex gap-5 justify-center py-2 h-full">
            <button
                className="bg-verde-menta p-1 rounded-sm text-white disabled:bg-gray-300"
                onClick={lastPage}
                disabled={currentPage === 1}
            >
                <MoveLeft />
            </button>
            <span
                className="bg-verde-suave px-4 flex justify-center items-center rounded-sm font-semibold "
            >
                {currentPage} de {numberOfPage}
            </span>

            <button
                className="bg-verde-menta p-1 rounded-sm text-white disabled:bg-gray-300"
                onClick={nextPage}
                disabled={currentPage === numberOfPage}
            >
                <MoveRight />
            </button>
        </div>
    )
}