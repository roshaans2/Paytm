import React from "react";

const Appbar = ({firstName}) => {
    let name = firstName.split('@')[0]
   name = name[0].toUpperCase() + name.slice(1)
    return (
        <div className="flex justify-between shadow h-14">
            <div className="flex flex-col justify-center h-full ml-4">
                PayTM App
            </div>
            <div className="flex">
                <div className="flex flex-col justify-center h-full mr-4">
                    {name}
                </div>
                <div className="flex justify-center mt-1 mr-2 rounded-full h-12 w-12 bg-slate-200">
                    <div className="flex flex-col justify-center h-full text-xl">
                        {name[0]}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appbar