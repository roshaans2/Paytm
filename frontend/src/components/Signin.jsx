import { BottomWarning } from "./BottomWarning"
import  Button  from "./Button"
import  Heading  from "./Heading"
import  InputBox  from "./InputBox"
import  SubHeading  from "./SubHeading"

const Signin = () => {

    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-100 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox placeholder="abc@gmail.com" label={"Email"} type="email"/>
        <InputBox placeholder="123456" label={"Password"} type="password" />
        <div className="pt-4">
          <Button label={"Sign in"} />
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
}

export default Signin