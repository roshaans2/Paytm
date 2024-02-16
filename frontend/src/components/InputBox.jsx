import React from "react";

const InputBox = ({label,placeholder,type}) => {
    return(
        <div>
            <div className="text-sm font-medium text-left py-2">
                {label}
            </div>
            <input className="w-full px-2 py-1 border rounded border-slate-200" type={type} placeholder={placeholder} />
        </div>
    )
}

export default InputBox