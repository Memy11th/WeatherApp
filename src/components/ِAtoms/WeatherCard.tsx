import { ForecastResponse } from '@/interfaces/ForecastResponse'
import CurrentWeather from './CurrentWeather';
import WeatherIcon from './WeatherIcon';
import { WeatherResponse } from '@/interfaces/WeatherResponse';

const WeatherCard = ({Forecast,Weather}:{Forecast:ForecastResponse|null ,Weather:WeatherResponse|null}) => {
    const {city/*,list,message*/}=Forecast||{};
    const {sunrise , sunset} = city||{};
    const Sunrise = (sunrise:number)=>{
        const sunriseDate = new Date(sunrise * 1000);
        const sunriseTime = sunriseDate.toLocaleString('en-US', {
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // Auto-detect timezone
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        });
        return sunriseTime
    }
    const Sunset = (sunset:number)=>{
        const sunsetDate = new Date(sunset * 1000);
        const sunsetTime = sunsetDate.toLocaleString('en-US', {
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // Auto-detect timezone
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        });
        return sunsetTime
    }
console.log(Weather)
    return (
                <div className='col-span-12 flex  gap-6 justify-center items-center'>
                        <CurrentWeather />
                        <WeatherIcon />
                </div>
                    
            
    )
}

export default WeatherCard
