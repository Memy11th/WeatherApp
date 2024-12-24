import { WeatherApi } from '@/api/weather';
import { useQuery } from '@tanstack/react-query';
export const useSearchCity = (query:string)=>{    
        return useQuery({
            queryKey:['CitySearch',query],
            queryFn:()=>WeatherApi.getBySearch(query),
            enabled : query.length >= 3 
        })
    };
