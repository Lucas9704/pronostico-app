import axios from "axios";

const apiKey= "26db772dcfe2bb3fe3cfea6779059234";

const API = axios.create({
    baseURL: "https://api.openweathermap.org/",
    timeout: 5000,
});

export { API, apiKey };