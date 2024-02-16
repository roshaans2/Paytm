import React from "react";
import Heading from './Heading'
import SubHeading from './SubHeading'
import InputBox from "./InputBox";
import Button from "./Button";
import { BottomWarning } from "./BottomWarning";

const Signup = () => {
    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-100 text-center p-2 h-max px-4">
                    <Heading label="Sign Up" />
                    <SubHeading label="Enter your information to create a account"/>
                    <InputBox label="First Name" placeholder="John" type="text"/>
                    <InputBox label="Last Name" placeholder="Doe" type="text"/>
                    <InputBox label="Email" placeholder="" type="email"/>
                    <InputBox label="Password" placeholder="John" type="password"/>
                    <div className="pt-4">
                        <Button label="Sign Up"/>
                    </div>
                    <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}/>
                </div>
            </div>
        </div>
    )
}

export default Signup