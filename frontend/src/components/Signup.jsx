import React, { useState } from "react";
import Heading from './Heading'
import SubHeading from './SubHeading'
import InputBox from "./InputBox";
import Button from "./Button";
import { BottomWarning } from "./BottomWarning";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async() => {
        const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
            username,
            firstName,
            lastName,
            password
        })
        localStorage.setItem("token",response.data.token)
        localStorage.setItem("name",username)
        navigate("/dashboard")
    }
    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-100 text-center p-2 h-max px-4">
                    <Heading label="Sign Up" />
                    <SubHeading label="Enter your information to create a account" />
                    <InputBox label="First Name" placeholder="John" type="text" onChange={(e) => {
                        setFirstName(e.target.value)
                    }} />
                    <InputBox label="Last Name" placeholder="Doe" type="text" onChange={(e)=>{
                        setLastName(e.target.value)
                    }} />
                    <InputBox label="Email" placeholder="" type="email" onChange={(e)=>{
                        setUsername(e.target.value)
                    }}/>
                    <InputBox label="Password" placeholder="John" type="password" onChange={(e)=>{
                        setPassword(e.target.value)
                    }} /> 
                    <div className="pt-4">
                        <Button onClick={handleSubmit} label="Sign Up" />
                    </div>
                    <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
                </div>
            </div>
        </div>
    )
}

export default Signup