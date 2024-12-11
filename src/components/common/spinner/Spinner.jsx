
import './spinner.css';

export const Spinner = ({ texto = 'Cargando' }) => {
    return (
        <div className="flex justify-center items-center gap-2">
            <div className="spinner"
                role="status"
                aria-live="polite"
                aria-label={texto}
            >

            </div>
            <span>{texto} </span>
        </div>
    )
}