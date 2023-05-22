import axios from "axios"
const BackendUrl="http://dummyjson.com/"
export const getData=async(url)=>{
    const response = await axios.get(BackendUrl+url);
    return response;
} 