import React from 'react'
import Cities from './Cities';
import Header from './Header';
import TodayWeather from './TodayWeather';
import NearDaysWeather from './NearDaysWeather';

function WeatherForecast() {
    return (
        <>
            <Cities />
            <div className='weatherForecast'>
                <Header />
                <TodayWeather />
                <NearDaysWeather />
            </div>
        </>
    )
}

export default WeatherForecast
