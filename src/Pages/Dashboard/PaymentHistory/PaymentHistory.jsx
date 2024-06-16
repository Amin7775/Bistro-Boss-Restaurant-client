import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const PaymentHistory = () => {
    const [history,setHistory]=useState([])
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()

    useEffect(()=>{
        axiosSecure.get(`/payments/${user?.email}`)
        .then(res=>{
            setHistory(res.data)
        })
    },[axiosSecure,user?.email])
    console.log(history)
    return (
        <div>
            This is payment history
        </div>
    );
};

export default PaymentHistory;