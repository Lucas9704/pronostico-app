import "./CurrentDay.scss";
import { useContext } from "react";
import { CityContext } from "../../../../contexts/CityContext";

function CurrentDay() {
    const { data } = useContext(CityContext); // useContext() es una función que retorna la data de la api
    
    return (
        <>
            <div className="CurrentDay__name">{data.city.name}</div>
            <div className="CurrentDay__date">{data.list[0].dt_txt}</div>
            <div className="CurrentDay__temp">{data.list[0].main.temp}</div>
            <div className="CurrentDay__humidity">{data.list[0].main.humidity}</div>
            <div className="CurrentDay__description">{data.list[0].weather[0].description}</div>
        </>
    )
}

export default CurrentDay;