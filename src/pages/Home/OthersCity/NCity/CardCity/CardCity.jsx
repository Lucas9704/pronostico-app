import { useFetch } from "../../../../../hooks/useFetch";
import "./CardCity.scss";

function CardCity(city) {
    const { data } = useFetch({
		url: `data/2.5/forecast?q=${city.city}&lang=es&appid=26db772dcfe2bb3fe3cfea6779059234`,
	}); // useFetch({}) es una función que retorna la data de la api
	if (!data) {
		return <div>Loading...</div>;
	} // si no hay data, retorna un div con el texto Loading...

    return (
        <div className="CardCity">
            <div className="CardCity__name">{data.city.name}</div>
            <div className="CardCity__date">{data.list[0].dt_txt}</div>
            <div className="Day__icon">
                <img src={`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`} alt={data.list[0].weather[0].description} />
            </div>
            <div className="CardCity__temp">{data.list[0].main.temp}</div>
            <div className="CardCity__humidity">{data.list[0].main.humidity}</div>
            <div className="CardCity__description">{data.list[0].weather[0].description}</div>
        </div>
    )
}

export default CardCity;