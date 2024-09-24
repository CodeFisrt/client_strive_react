import axios from "axios"


const allMeettingData = async() =>{

    const result = await axios.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllMeetings");
    return result.data.data
}


export {allMeettingData}
