import "./NDay.scss";

function NDay({ data }) {
    return (
        <>
            <div className="Day__date">{data.dt_txt}</div>
            <div className="Day__icon">
                <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].description} />
            </div>
            <div className="Day__temp">{data.main.temp}</div>
            <div className="Day__humidity">{data.main.humidity}</div>
            <div className="Day__wind">{data.wind.speed}</div>
            <div className="Day__pressure">{data.main.pressure}</div>
            <div className="Day__clouds">{data.clouds.all}</div>
            <div className="Day__rain">{data.rain ? data.rain["3h"] : 0}</div>
            <div className="Day__snow">{data.snow ? data.snow["3h"] : 0}</div>
            <div className="Day__url">{data.weather[0].description}</div>
            <div className="Day__url">{data.weather[0].icon}</div>
            <div className="Day__url">{data.weather[0].main}</div>
            <div className="Day__url">{data.weather[0].id}</div>
        </>
    )
}

export default NDay;