import CurrentWeather from './CurrentWeather';
import WeatherIcon from './WeatherIcon';
import { Skeleton } from '../ui/skeleton';
import { WeatherResponse } from '@/interfaces/WeatherResponse';


const WeatherCard = ({loadingWeather,Data,loadingLocation}:{loadingLocation?:boolean,loadingWeather:boolean,Data:WeatherResponse|null}) => {
    if(loadingLocation || loadingWeather ) return(
    <Skeleton className='col-span-12 md:col-span-5 flex  gap-6 justify-between items-center bg-blue-300/35 dark:bg-slate-800/35 rounded-xl p-4'/>);

    return (
                <div className=' col-span-12 md:col-span-5 flex  gap-6 justify-between items-center bg-blue-300/35 dark:bg-slate-800/35 rounded-xl p-4'>
                        <CurrentWeather data={Data} />
                        <WeatherIcon data={Data} />
                </div>
                    
            
    )
}

export default WeatherCard
