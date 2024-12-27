import { useForecast, useWeatherData } from '@/Hooks/useWeatherData';
import { ForecastResponse } from '@/interfaces/ForecastResponse';
import { WeatherResponse } from '@/interfaces/WeatherResponse';
import { useParams, useSearchParams } from 'react-router-dom';

const City = () => {
    const [searchParams] = useSearchParams();
    const params = useParams(); 
    const lat = parseFloat(searchParams.get('lat') || '0');
    const lon = parseFloat(searchParams.get('lon') || '0');
    const coordinates = { lat, lon };
    const {data:forecastData} = useForecast<ForecastResponse>(coordinates);
    const {data:weatherData} = useWeatherData<WeatherResponse>(coordinates);
    console.log(weatherData);
    console.log(forecastData);
    return <>
    
    </>
}

export default City;
