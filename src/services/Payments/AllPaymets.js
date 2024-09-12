import axios, { Axios } from "axios"

 

 const allPayment=async()=>{
   
    const result=await axios.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllPayments")
    return result.data.data;
   }
   
 export {allPayment}