import axios from 'axios';

const API_KEY='eec4b6de34f9cc6f1539522186eebca0';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},cn`;
    var request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
