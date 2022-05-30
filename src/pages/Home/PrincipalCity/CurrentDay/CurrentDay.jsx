import "./CurrentDay.scss";
import { useContext } from "react";
import { CityContext } from "../../../../contexts/CityContext";

function CurrentDay() {
    const { data } = useContext(CityContext); // useContext() es una función que retorna la data de la api
    
    return (
        <>
            <div className="Day__date">{new Date(data.list[0].dt * 1000).toDateString()}</div>
            <div className="Day__list">
                <div className="Day__contain">
                    <div className="Day__temp">{data.list[0].main.temp}°</div>
                    <div className="Day__temp_min">Min. Temp: {data.list[0].main.temp_min}°</div>
                    <div className="Day__temp_max">Max Temp: {data.list[0].main.temp_max}°</div>
                    <div className="Day__sunrise">Sunrise: {new Date(data.city.sunrise * 1000).toLocaleTimeString()} hs.</div>
                <div className="Day__sunset">Sunset: {new Date(data.city.sunset * 1000).toLocaleTimeString()} hs.</div>
                </div>
                <div className="Day__contain">
                    <div className="Day__icon">
                        <img src={`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`} alt={data.list[0].weather[0].description} />
                    </div>
                    <div className="Day__url">{data.list[0].weather[0].description.toUpperCase()}</div>
                </div>
                <div className="Day__contain">
                    <div className="Day__humidity">Humidity: {data.list[0].main.humidity}%</div>
                    <div className="Day__wind">Wind Speed: {Math.round(data.list[0].wind.speed * 3.6)} km/hs</div>
                    <div className="Day__pressure">Pressure: {data.list[0].main.pressure} hPa</div>
                    <div className="Day__clouds">Cloudiness: {data.list[0].clouds.all}%</div>
                </div>
            </div>
        </>
    )
}

export default CurrentDay;