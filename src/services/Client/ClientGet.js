import axios from "axios"
const ClientData =async ()=>{
    try{
        const result =await axios.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllClients");
        return result.data;
    }catch (error){
        if(error.response.status == 400){
            alert("Please Check Form Value" + JSON.stringify(error.response.data));
        }
    }
}
export {ClientData}