import { useGeoLocation } from '@/Hooks/useLocation';
import { Skeleton } from '../ui/skeleton';
import CurrentWeather from './CurrentWeather';
import WeatherIcon from './WeatherIcon';
import { useWeatherData } from '@/Hooks/useWeatherData';
import { WeatherResponse } from '@/interfaces/WeatherResponse';

const WeatherCard = () => {
    const {coordinates,isLoading}=useGeoLocation();
    const weatherQuery = useWeatherData<WeatherResponse>(coordinates);
    // const Sunrise = (sunrise:number)=>{
    //     const sunriseDate = new Date(sunrise * 1000);
    //     const sunriseTime = sunriseDate.toLocaleString('en-US', {
    //     timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // Auto-detect timezone
    //     hour12: true,
    //     hour: '2-digit',
    //     minute: '2-digit',
    //     });
    //     return sunriseTime
    // }
    // const Sunset = (sunset:number)=>{
    //     const sunsetDate = new Date(sunset * 1000);
    //     const sunsetTime = sunsetDate.toLocaleString('en-US', {
    //     timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // Auto-detect timezone
    //     hour12: true,
    //     hour: '2-digit',
    //     minute: '2-digit',
    //     });
    //     return sunsetTime
    // }

    if(isLoading || weatherQuery.isLoading){
        return (
            <div className="flex justify-between gap-6 items-center">
            <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <Skeleton className="h-4 w-[250px]" />
            </div>
            <div className="flex flex-col items-center space-y-5">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <Skeleton className="h-4 w-[150px]" />
            </div>
            </div>
          )
    }
    return (
                <div className=' col-span-12 md:col-span-5 flex  gap-6 justify-between items-center bg-blue-300/35 dark:bg-slate-800/35 rounded-xl p-4'>
                        <CurrentWeather/>
                        <WeatherIcon />
                </div>
                    
            
    )
}

export default WeatherCard
