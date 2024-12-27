import { useGeoLocation } from '@/Hooks/useLocation';
import CurrentWeather from './CurrentWeather';
import WeatherIcon from './WeatherIcon';
import { useWeatherData } from '@/Hooks/useWeatherData';
import { WeatherResponse } from '@/interfaces/WeatherResponse';
import { Skeleton } from '../ui/skeleton';


const WeatherCard = () => {
    const {coordinates,isLoading}=useGeoLocation();
    const weatherQuery = useWeatherData<WeatherResponse>(coordinates);
    if(isLoading || weatherQuery.isLoading) return(<Skeleton className='col-span-12 md:col-span-5 flex  gap-6 justify-between items-center bg-blue-300/35 dark:bg-slate-800/35 rounded-xl p-4'/>);

    return (
                <div className=' col-span-12 md:col-span-5 flex  gap-6 justify-between items-center bg-blue-300/35 dark:bg-slate-800/35 rounded-xl p-4'>
                        <CurrentWeather />
                        <WeatherIcon />
                </div>
                    
            
    )
}

export default WeatherCard
