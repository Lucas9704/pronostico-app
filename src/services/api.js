import axios from "axios";

const API = axios.create({
    apiKey: "8a5e9515a6583a0a93a8e614d848ffb5",
    baseURL: "https://api.openweathermap.org/",
    timeout: 5000,
});

export { API };