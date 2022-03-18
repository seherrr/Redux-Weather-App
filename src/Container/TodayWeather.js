import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { 
    city,
    latitude,
    currentMainDescription, 
    currentDescription, 
    currentIcon, 
    currentTemperature, 
    currentMinTemperature, 
    currentMaxTemperature, 
    currentWind,
    currentHumidity, 
    currentPressure, 
    changeDate,
    changeCurrentMainDescription, 
    changeCurrentDescription, 
    changeCurrentIcon, 
    changeCurrentTemperature, 
    changeCurrentMinTemperature, 
    changeCurrentMaxTemperature, 
    changeCurrentWind, 
    changeCurrentHumidity, 
    changeCurrentPressure,
    changeLatitude,
    changeLongitude
} from '../redux/weatherSlice';
import { useEffect, useState } from 'react';


function TodayWeather() {
    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch();

    const cityName = useSelector(city);
    const lat = useSelector(latitude);
    const mainDescription = useSelector(currentMainDescription);
    const description = useSelector(currentDescription);
    const icon = useSelector(currentIcon);
    const temperature = useSelector(currentTemperature);
    const minTemperature = useSelector(currentMinTemperature);
    const maxTemperature = useSelector(currentMaxTemperature);
    const wind = useSelector(currentWind);
    const humidity = useSelector(currentHumidity);
    const pressure = useSelector(currentPressure);

    function getGeocode() {
        axios(`http://open.mapquestapi.com/geocoding/v1/address?key=${process.env.REACT_APP_GECODE_KEY}&location=${cityName}`)
        .then(response => dispatchGeocode(response.data.results[0].locations[0].displayLatLng))
        .catch(e => console.log(e))
        .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        getGeocode();

        if(lat !== ''){
            axios(`http://api.openweathermap.org/data/2.5/find?q=${cityName}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
            .then(response => dispatchData(response.data.list[0]))
            .catch(e => console.log(e))
            .finally(() => setIsLoading(false))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cityName])

    function dispatchGeocode(response) {
        dispatch(changeLatitude((response.lat)));
        dispatch(changeLongitude((response.lng)));
    }

    function dispatchData(response) {
        dispatch(changeDate(response.dt));
        dispatch(changeCurrentTemperature((response.main.temp)));
        dispatch(changeCurrentMinTemperature((response.main.temp_min)));
        dispatch(changeCurrentMaxTemperature((response.main.temp_max)));
        dispatch(changeCurrentIcon(`http://openweathermap.org/img/w/${response.weather[0].icon}.png`));
        dispatch(changeCurrentMainDescription((response.weather[0].main)));
        dispatch(changeCurrentDescription((response.weather[0].description)));
        dispatch(changeCurrentWind((response.wind.speed)));
        dispatch(changeCurrentHumidity((response.main.humidity)));
        dispatch(changeCurrentPressure((response.main.pressure)));
    }

    return (
        <div className="todayWeather">
            {
                isLoading 
                ? <div>Loading..</div>
                : <>
                    <div className="todayWeather__weather">
                        <img className="todayWeather__weather__icon" src={icon} alt={mainDescription} />
                        <span className="todayWeather__weather__iconName"><strong>{description}</strong></span>
                    </div>
                    <div className="todayWeather__temperature">
                        <span className="todayWeather__temperature__information">{Math.ceil(temperature)}°C</span>
                        <div>
                            <span className="todayWeather__temperature__max">{Math.ceil(minTemperature)}°C</span>
                            <span className="todayWeather__temperature__seperator"> / </span>
                            <span className="todayWeather__temperature__min">{Math.ceil(maxTemperature)}°C</span>
                        </div>
                    </div>
                
                    <div className="todayWeather__status">
                        <span className="todayWeather__status__wind"><strong>Wind</strong> {wind} kmph</span>
                        <span className="todayWeather__status__precip"><strong>Humidity</strong> {humidity}%</span>
                        <span className="todayWeather__status__pressure"><strong>Pressure</strong> {pressure} mb</span>
                    </div>
                </>
            }
        </div>
    )
}

export default TodayWeather
