import { WeatherApi } from '@/api/weather';
import { Coordinates } from '@/interfaces/coordinates';
import { useQuery } from '@tanstack/react-query';

export function useWeatherData(coordinates:Coordinates|null){
    
    return useQuery({
            queryKey:['WeatherData'],
            queryFn: ()=> coordinates ? WeatherApi.getCurrentWeather(coordinates):null,
            enabled: !!coordinates
        })
}