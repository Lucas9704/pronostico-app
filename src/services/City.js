import { API, apiKey } from "./api";

export function getCity(city) {
    return API.get(`data/2.5/forecast?q=${city}&lang=es&appid=${apiKey}`);
}