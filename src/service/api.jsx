import axios from 'axios';

const API_KEY = 'e1b1ecefc3c21d7490a2749fc08ec01a';
const URL = 'https://api.openweathermap.org/data/2.5/weather';


export const getWeather = async(city, country) => {
    const data = await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
    return data;
}