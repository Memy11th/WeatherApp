import { WeatherApi } from '@/api/weather';
import { Coordinates } from '@/interfaces/coordinates';
import { useQuery, UseQueryResult } from '@tanstack/react-query';

export function useWeatherData<T extends unknown | null>(coordinates:Coordinates|null): UseQueryResult<T>{
    return useQuery<T>({
            queryKey:['weather'],
            queryFn: ()=> coordinates ? WeatherApi.getCurrentWeather(coordinates) as T:null as T,
            enabled: !!coordinates,
            
        })
};

    export function useForecast<T extends unknown | null>(coordinates: Coordinates | null): UseQueryResult<T> {
        return useQuery<T>({
        queryKey: ['Forecast', coordinates],
        queryFn: async () => {
            if (!coordinates) {
            return null as T; // Explicitly cast to match T
            }
            const data = await WeatherApi.getForecast(coordinates);
            return data as T;
        },
        enabled: !!coordinates,
        });
    }


export function useGeocodeReverse (coordinates : Coordinates|null){
    return useQuery({
        queryKey:['geoCodeReverse'],
        queryFn:()=> coordinates ? WeatherApi.reverseGeocode(coordinates):null,
        enabled : !!coordinates
    })
};