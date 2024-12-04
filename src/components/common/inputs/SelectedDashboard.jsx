import { forwardRef } from "react"



export const SelectedDashboard = forwardRef(({ label = 'Label', error = '', options = [], ...props }, ref) => {

    return (
        <label className="px-3 font-extralight block">
            {label}
            <select
                className="w-full py-2 px-2 border border-gray-500 rounded-md outline-none hover:border-verde-suave selection:bg-red-500"
                ref={ref}
                defaultValue={options.length > 0 ? options[0].value : ''}
                {...props}
            >
                {
                    options.map((op) => (
                        <option key={op.value} value={op.value}>
                            {op.text}
                        </option>
                    ))
                }
            </select>
            {error && <span className="text-red-600 text-xs ml-4 font-semibold">{error}</span>}
        </label>
    )
})