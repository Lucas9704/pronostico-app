import "./CurrentDay.scss";
import { useContext } from "react";
import { CityContext } from "../../../../contexts/CityContext";

function CurrentDay() {
    const { data } = useContext(CityContext); // useContext() es una función que retorna la data de la api
    
    return (
        <>
            <div className="Day__name">{data.city.name}</div>
            <div className="Day__date">{data.list[0].dt_txt}</div>
            <div className="Day__icon">
                <img src={`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`} alt={data.list[0].weather[0].description} />
            </div>
            <div className="Day__temp">{data.list[0].main.temp}</div>
            <div className="Day__humidity">{data.list[0].main.humidity}</div>
            <div className="Day__wind">{data.list[0].wind.speed}</div>
            <div className="Day__pressure">{data.list[0].main.pressure}</div>
            <div className="Day__clouds">{data.list[0].clouds.all}</div>
            <div className="Day__rain">{data.list[0].rain ? data.rain["3h"] : 0}</div>
            <div className="Day__snow">{data.list[0].snow ? data.snow["3h"] : 0}</div>
            <div className="Day__url">{data.list[0].weather[0].description}</div>
            <div className="Day__url">{data.list[0].weather[0].icon}</div>
            <div className="Day__url">{data.list[0].weather[0].main}</div>
            <div className="Day__url">{data.list[0].weather[0].id}</div>
        </>
    )
}

export default CurrentDay;