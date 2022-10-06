import axios from "axios"

const base_url = "https://www.themealdb.com/api/json/v1/1"

export const fetchFromAPI = async (url)=> {
    try {
        const { data } = await axios.get(`${base_url}/${url}`)
        

        return data.meals
    } catch (error) {
        console.log(error);
    }

    
}
