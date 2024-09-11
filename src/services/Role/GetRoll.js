import axios from "axios";

const allRole=async()=>{
    try {
        const result = await axios.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles");
        return result.data.data;
    } catch (error) {
        if(error.response.status==400){
            alert("Please Check Form Value"+JSON.stringify(error.response.data));
        }
       }
    
    }

    export {allRole}
