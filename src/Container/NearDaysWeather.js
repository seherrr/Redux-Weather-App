import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { latitude, longitude, city } from '../redux/weatherSlice';
import { nanoid } from 'nanoid';
import Moment from 'react-moment';
import 'moment-timezone';

function NearDaysWeather() {
    const lat = useSelector(latitude);
    const lon = useSelector(longitude);
    const cityName = useSelector(city);

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const newData = [];

    useEffect(() => {
        if(lat !== '') {
            axios(`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
            .then(response => setData(response.data.daily))
            .catch(e => console.log(e))
            .finally(() => setIsLoading(false))
        }
    }, [lat, lon])

    // if you want a 5-day weather forecast it should be this way
    // in the case of i = 0, it shows the weather today
    // supports showing the weather for up to 7 days for the future, except today
    for(let i = 1; i <= 5; i++) {
        newData[i] = data[i];
    }

    return (
        <div className="nearDaysWeather">
            {
                isLoading 
                ? <div>Loading..</div>
                : newData.map(data => 
                    <div className="nearDaysWeather__information" key={nanoid()}>
                        <span className="nearDaysWeather__information__day"><Moment format="ddd">{data.dt*1000}</Moment></span>
                        <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt={data.weather[0].description} className="nearDaysWeather__information__icon" />
                        <div className="nearDaysWeather__information__temperature">
                            <span className="nearDaysWeather__information__temperature__morn">{Math.ceil(data.temp.morn)}°C</span>
                            <span className="nearDaysWeather__information__temperature__seperator">/</span>
                            <span className="nearDaysWeather__information__temperature__night">{Math.ceil(data.temp.night)}°C</span>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default NearDaysWeather
