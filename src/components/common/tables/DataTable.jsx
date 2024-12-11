import { useState } from "react";
import PropTypes from 'prop-types';
import { Spinner } from "../spinner/Spinner";
import { useEffect } from "react";
import { Paginator } from "./Paginator";


export const DataTable = ({
    predefinedLimit = 30,
    columns,
    dataToDisplay,
    showPaginator = false,
    showFilter = false,
    fetchDataApi = null
}) => {

    const [limit, setLimit] = useState(predefinedLimit);
    const [rows, setRows] = useState(dataToDisplay || []);
    const [numberOfPage, setNumberOfPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [newColumns, setNewColumns] = useState(columns)

    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState('');

    const fetchData = async (currentPage, limit) => {
        setLoading(true);
        try {
            const { data, total } = await fetchDataApi(currentPage, limit);
            setRows(data);
            setNumberOfPage(Math.ceil(total / limit));
        } catch (err) {
            setErrors('Ocurrio un error al obtener los datos. ');
        } finally {
            setLoading(false);
        }
    }

    const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, numberOfPage));
    const lastPage = () => setCurrentPage(prev => Math.max(prev - 1));

    useEffect(() => {
        if (fetchDataApi) {
            fetchData(currentPage, limit);
        }
    }, [limit, currentPage, fetchDataApi])

    if (loading) return <div className="h-full flex justify-center items-center"> <Spinner texto="Cargando datos..." /></div>
    if (errors.length > 0) return <span className="block mt-2 py-2 text-center bg-red-800 text-white">{errors}</span>

    return (
        <div className="w-full overflow-x-auto text-xs font-extralight lg:text-sm scroll-oculto">
            <table className="table-auto w-full min-w-[640px]">
                <thead>
                    <tr>
                        {
                            newColumns?.map((item, index) => (
                                <th
                                    className="bg-gray-200  py-1 border-black border-b"
                                    key={index}
                                    style={{ width: item.size || 'auto' }}
                                >
                                    {item.nombre}
                                </th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody className="bg-gray-100 ">
                    {
                        rows?.map((row, rowIndex) => (
                            <tr
                                key={rowIndex}
                                className="hover:bg-red-300 border-y-2"
                            >
                                {
                                    newColumns?.map((column, colIndex) => (
                                        <td
                                            key={colIndex}
                                            className={`${column.accessor == 'nombre' ? 'text-left' : 'text-center'}`}
                                        >
                                            {
                                                row[column.accessor]
                                            }
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {
                showPaginator && (
                    <Paginator
                        currentPage={currentPage}
                        numberOfPage={numberOfPage}
                        lastPage={lastPage}
                        nextPage={nextPage}
                    />
                )
            }
        </div>
    )
}


DataTable.propTypes = {
    columns: PropTypes.array.isRequired,
    dataToDisplay: PropTypes.array,
    columns: PropTypes.array,
    enablePaging: PropTypes.bool,
    fetchDataApi: PropTypes.func,
    enableFilter: PropTypes.bool
}