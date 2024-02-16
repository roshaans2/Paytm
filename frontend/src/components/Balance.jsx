import React from "react";
const Balance = ({value}) => {
    return(
        <div className="flex">
            <div className="font-semibold ml-10 mt-4 text-lg">
                Your balance
            </div>
            <div className="font-semibold ml-2 mt-4 text-lg">
                Rs {value}
            </div>
        </div>
    )
}

export default Balance