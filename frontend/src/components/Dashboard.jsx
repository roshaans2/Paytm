import React from "react";
import Appbar from "./Appbar";
import Balance from "./Balance";
import Users from "./Users";

const Dashboard = () => {
    return(
        <>
            <Appbar/>
            <Balance value="10,000"/>
            <Users/>
        </>
    )
}

export default Dashboard