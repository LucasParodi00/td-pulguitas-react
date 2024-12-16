


export const BtnCheckBoxFiltter = ({ item, ...props }) => {
    return (
        <label className="flex gap-2 text-sm text-center ml-5 group:">
            <input
                {...props}
                type="checkbox"
                value={item}
                className="appearance-none w-5 h-5 border rounded-md checked:bg-verde-suave border-black peer"
            />
            <span className="peer-checked:text-verde-suave">{item}</span>
        </label>
    )
}