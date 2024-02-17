import { BottomWarning } from "./BottomWarning"
import Button from "./Button"
import Heading from "./Heading"
import InputBox from "./InputBox"
import SubHeading from "./SubHeading"

const SendMoney = () => {

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-100 text-center p-2 h-max px-4 pt-4 pl-20 pr-20">
                <Heading label={"Send Money"} />
                <div className="flex mt-20">
                    <div className="rounded-full h-12 w-12 flex justify-center bg-slate-200 mt-1 mr-2">
                        <div className="flex flex-col justify-center h-full text-xl">
                            A
                        </div>
                    </div>
                    <div className="flex flex-col justify-center font-semibold">
                        <div>
                            Aravind
                        </div>
                    </div>
                </div>
                <InputBox placeholder="1000" label={"Amount (in Rs)"} type="text" />
                <div className="pt-4 mb-6 w-full">
                    <Button label={"Initiate transfer"} />
                </div>
            </div>
        </div>
    </div>
}

export default SendMoney