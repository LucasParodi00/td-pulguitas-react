import { Eye } from "lucide-react";
import { Trash2 } from "lucide-react";
import { Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom"




export const ActionDataTable = ({ acciones = [], id = '', routes = [], onEdit = null, onDelete = null }) => {
    const navigate = useNavigate();

    const handleAction = (action) => {
        if (action === 'eliminar' && onDelete) {
            onDelete();
            return;
        }

        if (action === 'editar' && onEdit) {
            onEdit();
            return
        }

        const ruta = routes[action]?.(id);
        if (ruta) {
            navigate(ruta);
        }
    };

    return (
        <div className="flex space-x-2 justify-center">
            {
                acciones.includes('ver') && (
                    <button
                        onClick={() => handleAction('ver')}
                        className="bg-blue-500 rounded-md text-white px-2 py-1"
                    >
                        <Eye size={16} />
                    </button>
                )
            }
            {
                acciones.includes('editar') && (
                    <button
                        onClick={() => handleAction('editar')}
                        className="bg-orange-500 rounded-md text-white px-2 py-1"
                    >
                        <Pencil size={16} />
                    </button>
                )
            }
            {
                acciones.includes('eliminar') && (
                    <button
                        onClick={() => handleAction('eliminar')}
                        className="bg-red-500 rounded-md text-white px-2 py-1"
                    >
                        <Trash2 size={16} />
                    </button>
                )
            }
        </div>
    )
};

