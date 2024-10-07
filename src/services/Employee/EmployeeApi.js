import axios from "axios"


const readEmp=async()=>{
    try {
    const result=await axios.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllEmployee");
    return result.data.data;
    
} catch (error) {
    if(error.response.status==400){
        alert("Please Check Form Value"+JSON.stringify(error.response.data));
    }

   }
}

export {readEmp}

