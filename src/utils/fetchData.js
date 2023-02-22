import axios from "axios";
import {api} from "./api";
export default async function fetchData(){
    try {
        const response = await axios.get(api.characters);
        const data = response.data;
        return data;
    } catch (error) {
        console.log(error);
    }
};