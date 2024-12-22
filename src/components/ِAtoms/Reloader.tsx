import { useGeoLocation } from '@/Hooks/useLocation'
import { useWeatherData, useForecast, useGeocodeReverse } from '@/Hooks/useWeatherData';
import { Coordinates } from '@/interfaces/coordinates'
import { ForecastResponse } from '@/interfaces/ForecastResponse';
import { WeatherResponse } from '@/interfaces/WeatherResponse';
import { RefreshCcw } from 'lucide-react'

const Reloader = ({isLoading , coordinates}:{isLoading:boolean,coordinates:Coordinates|null }) => {
    const {getLocation} = useGeoLocation();
        const weatherQuery = useWeatherData<WeatherResponse>(coordinates);
        const forecastQuery = useForecast<ForecastResponse>(coordinates);
        const geoCodeReverseQuery = useGeocodeReverse(coordinates);
    const handleRefresh = ()=>{
        if(coordinates){
            getLocation();
            weatherQuery.refetch();
            forecastQuery.refetch();
            geoCodeReverseQuery.refetch();
    }
    }
    return <>
        <div className='flex justify-between'>
            <h1 className='text-pretty font-bold '>Today's weather</h1>
            <button disabled={isLoading} className='bg-slate-100 dark:bg-slate-900 p-2 rounded-xl' onClick={handleRefresh}>
                <RefreshCcw  className={` h-4 w-4 ${isLoading || forecastQuery.isLoading || weatherQuery.isLoading ? 'animate-spin text-rose-600 ' : '' }`} />
            </button>
            
        </div>
        </>
}


export default Reloader
