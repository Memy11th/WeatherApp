import CurrentWeather from './CurrentWeather';
import WeatherIcon from './WeatherIcon';

const WeatherCard = () => {
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
    return (
                <div className=' col-span-12 md:col-span-5 flex  gap-6 justify-between items-center bg-slate-200/45 dark:bg-slate-800/35 rounded-xl p-4'>
                        <CurrentWeather/>
                        <WeatherIcon />
                </div>
                    
            
    )
}

export default WeatherCard
