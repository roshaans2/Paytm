import { useNavigate, useSearchParams } from "react-router-dom"
import { BottomWarning } from "./BottomWarning"
import Button from "./Button"
import Heading from "./Heading"
import InputBox from "./InputBox"
import SubHeading from "./SubHeading"
import axios from "axios"
import { useState } from "react"

const SendMoney = () => {

    const [searchParams] = useSearchParams()
    const id = searchParams.get("id")
    const name = searchParams.get("name")

    const [amount,setAmount] = useState(0)
    const navigate = useNavigate()

    if(!localStorage.getItem("token")){
        navigate("/signin")
    }

    const handleSubmit = async() => {
        await axios.post("http://localhost:3000/api/v1/account/transfer", {
            to: id,
            amount
        }, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
        navigate("/dashboard")
    }

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-100 text-center p-2 h-max px-4 pt-4 pl-20 pr-20">
                <Heading label={"Send Money"} />
                <div className="flex mt-20">
                    <div className="rounded-full h-12 w-12 flex justify-center bg-slate-200 mt-1 mr-2">
                        <div className="flex flex-col justify-center h-full text-xl">
                            {name[0]}
                        </div>
                    </div>
                    <div className="flex flex-col justify-center font-semibold">
                        <div>
                            {name}
                        </div>
                    </div>
                </div>
                <InputBox placeholder="1000" label={"Amount (in Rs)"} type="text" onChange={(e)=>{
                    setAmount(e.target.value)
                }}/>
                <div className="pt-4 mb-6 w-full">
                    <Button onClick={handleSubmit} label={"Initiate transfer"} />
                </div>
            </div>
        </div>
    </div>
}

export default SendMoney