import React, { useEffect, useState } from "react";
import Appbar from "./Appbar";
import Balance from "./Balance";
import Users from "./Users";
import axios from "axios"
import { useNavigate, useSearchParams } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate()
    if(!localStorage.getItem("token")){
        navigate("/signin")
    }
    const [balance,setBalance] = useState(0)
    const name = localStorage.getItem("name")
    useEffect(()=>{
        const getBalance = async() => {
            const data = await axios.get("http://localhost:3000/api/v1/account/balance",{
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            })
            setBalance(data.data.balance)
        }
        getBalance()
    },[])
    return(
        <>
            <Appbar firstName={name}/>
            <Balance value={balance}/>
            <Users/>
        </>
    )
}

export default Dashboard