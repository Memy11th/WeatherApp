import { WeatherApi } from '@/api/weather';
import { Coordinates } from '@/interfaces/coordinates';
import { useQuery } from '@tanstack/react-query';

export function useWeatherData(coordinates:Coordinates|null){
    return useQuery({
            queryKey:['weather'],
            queryFn: ()=> coordinates ? WeatherApi.getCurrentWeather(coordinates):null,
            enabled: !!coordinates,
            
        })
};

export function useForecast(coordinates:Coordinates|null){
    return useQuery({
        queryKey:['Forecast'],
        queryFn:()=> coordinates? WeatherApi.getForecast(coordinates) : null,
        enabled: !!coordinates
    })
};

export function useGeocodeReverse (coordinates : Coordinates|null){
    return useQuery({
        queryKey:['geoCodeReverse'],
        queryFn:()=> coordinates ? WeatherApi.reverseGeocode(coordinates):null,
        enabled : !!coordinates
    })
};