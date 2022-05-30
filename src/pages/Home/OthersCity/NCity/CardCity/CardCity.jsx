import { useFetch } from "../../../../../hooks/useFetch";
import "./CardCity.scss";

function CardCity(city) {
    const { data } = useFetch({
		url: `data/2.5/forecast?q=${city.city}&lang=es&appid=26db772dcfe2bb3fe3cfea6779059234&units=metric`,
	}); // useFetch({}) es una función que retorna la data de la api
	if (!data) {
		return <div>Loading...</div>;
	} // si no hay data, retorna un div con el texto Loading...

    return (
        <>
            <div className="OthersTitle">
                <div className="CardCity__name">{data.city.name}, {new Date(data.list[0].dt * 1000).toDateString()}</div>
            </div>
            <div className="Day__list">
                <div className="Day__contain">
                    <div className="CardCity__temp">{data.list[0].main.temp}°</div>
                    <div className="CardCity__temp_min">Min. Temp: {data.list[0].main.temp_min}°</div>
                    <div className="CardCity__temp_max">Max Temp: {data.list[0].main.temp_max}°</div>
                    <div className="CardCity__humidity">Humidity: {data.list[0].main.humidity}%</div>
                </div>
                <div className="Day__contain">
                    <div className="Day__icon">
                        <img src={`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`} alt={data.list[0].weather[0].description} />
                    </div>
                    <div className="CardCity__description">{data.list[0].weather[0].description.toUpperCase()}</div>
                </div>
            </div>         
        </>
    )
}

export default CardCity;