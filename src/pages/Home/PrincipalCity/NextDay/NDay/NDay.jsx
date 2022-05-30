import "./NDay.scss";

function NDay({ data }) {
    return (
        <>
        <div className="Day__list">
            <div className="Day__contain">
                <div className="Day__temp">{data.main.temp}°</div>
                <div className="Day__temp_min">Min. Temp: {data.main.temp_min}°</div>
                <div className="Day__temp_max">Max Temp: {data.main.temp_max}°</div>
            </div>
            <div className="Day__contain">
                <div className="Day__date">{new Date(data.dt * 1000).toDateString()}</div>
                <div className="Day__icon">
                    <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].description} />
                </div>
                <div className="Day__url">{data.weather[0].description.toUpperCase()}</div>
            </div>
            <div className="Day__contain">
                <div className="Day__humidity">Humidity: {data.main.humidity}%</div>
                <div className="Day__pressure">Pressure: {data.main.pressure} hPa</div>
                <div className="Day__clouds">Cloudiness: {data.clouds.all}%</div>
            </div>
        </div>
        </>
    )
}

export default NDay;