import React, { useEffect, useState } from "react";
import Button from "./Button";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const Users = () => {
    const [users,setUsers] = useState([])
    const [filter,setFilter] = useState("")
    useEffect(()=>{
        const getUsers = async() => {
            const response = await axios("https://paytm-2rfc.onrender.com/api/v1/user/bulk?filter="+filter)
            setUsers(response.data.users)
        }
        getUsers()
    },[filter])
    return(
        <div className="ml-10 mr-10">
            <div className="font-bold mt-6 text-lg">
                Users
            </div>
            <div className="my-2">
                <input type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200" onChange={(e)=>{
                    setFilter(e.target.value)
                }}/>
            </div>
            <div>
                {users.map(user => <User key={user._id} user={user}/>)}
            </div>
        </div>
    )
}

const User = ({user}) => {
    const navigate = useNavigate()
    return(
        <div className="flex justify-between">
            <div className="flex">
                <div className="rounded-full h-12 w-12 flex justify-center bg-slate-200 mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-xl">
                        {user.firstName[0]}
                    </div>
                </div>
                <div className="flex flex-col justify-center h-full">
                    <div>
                        {user.firstName} {user.lastName}
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center h-full">
                <Button onClick={(e)=>{
                    navigate("/send?id="+user._id+"&name="+user.firstName)
                }} label={"Send Money"}/>
            </div>
        </div>
    )
}

export default Users