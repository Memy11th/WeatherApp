import { ForecastResponse } from '@/interfaces/ForecastResponse'
import React from 'react'

const WeatherCard = ({Forecast}:{Forecast:ForecastResponse|null}) => {
    const {city,cnt,cod,list,message}=Forecast||{};
    const {sunrise , sunset} = city||{};
    const getSunrise = (sunrise:number)=>{
        const sunriseDate = new Date(sunrise * 1000);
        const sunriseTime = sunriseDate.toLocaleString('en-US', {
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // Auto-detect timezone
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        });
        return sunriseTime
    }
    const getSunset = (sunset:number)=>{
        const sunsetDate = new Date(sunset * 1000);
        const sunsetTime = sunsetDate.toLocaleString('en-US', {
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // Auto-detect timezone
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        });
        return sunsetTime
    }
    

    return (
        <div>
            {getSunrise(sunrise||0)}
            {getSunset(sunset||0)}
            {Forecast?.list.map((item,index)=><div key={index}>{item.weather[0].main}</div>)}
        </div>
    )
}

export default WeatherCard
