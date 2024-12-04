import { forwardRef } from "react"



export const InputDashboard = forwardRef(({ label = 'Label', error = '', ...props }, ref) => {

    return (
        <label className="px-3 font-extralight block" >
            {label}
            < input
                className="w-full py-2 px-2 border border-gray-500 rounded-md outline-none hover:border-verde-suave"
                ref={ref}
                {...props}
            />
            {error && <span className="text-red-600 text-xs ml-4 font-semibold">{error}</span>}
        </label>
    )
})