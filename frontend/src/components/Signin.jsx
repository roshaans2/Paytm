import { useState } from "react"
import { BottomWarning } from "./BottomWarning"
import  Button  from "./Button"
import  Heading  from "./Heading"
import  InputBox  from "./InputBox"
import  SubHeading  from "./SubHeading"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Signin = () => {
   const [username,setUsername] = useState("")
   const [password,setPassword] = useState("") 
   const navigate = useNavigate()

   const handleSubmit = async() => {
      const response = await axios.post("https://paytm-2rfc.onrender.com/api/v1/user/signin",{
        username,
        password
      })
      localStorage.setItem("token",response.data.token)
      localStorage.setItem("name",username)
      navigate("/dashboard")
   }

    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-100 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox placeholder="abc@gmail.com" label={"Email"} type="email" onChange={(e)=>{
          setUsername(e.target.value)
        }}/>
        <InputBox placeholder="123456" label={"Password"} type="password" onChange={(e)=>{
          setPassword(e.target.value)
        }}/>
        <div className="pt-4">
          <Button onClick={handleSubmit} label={"Sign in"} />
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
}

export default Signin