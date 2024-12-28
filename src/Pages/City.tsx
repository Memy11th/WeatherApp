import Forecast from '@/components/ِAtoms/Forecast';
import GridContainer from '@/components/ِAtoms/GridContainer';
import HourlyChart from '@/components/ِAtoms/HourlyChart';
import WeatherCard from '@/components/ِAtoms/WeatherCard';
import WeatherDetails from '@/components/ِAtoms/WeatherDetails';
import { useForecast, useWeatherData } from '@/Hooks/useWeatherData';
import { ForecastResponse } from '@/interfaces/ForecastResponse';
import { WeatherResponse } from '@/interfaces/WeatherResponse';
import {  useParams, useSearchParams } from 'react-router-dom';
import React from'react';
import FavoriteButton from '@/components/ِAtoms/FavoriteButton';

const City = () => {
    const [searchParams] = useSearchParams();
    const params = useParams(); 
    const lat = parseFloat(searchParams.get('lat') || '0');
    const lon = parseFloat(searchParams.get('lon') || '0');
    const coordinates = { lat, lon };
    const {data:forecastData,isLoading:forecastLoading,refetch:forecastRefetch} = useForecast<ForecastResponse>(coordinates);
    const {data:weatherData,isLoading:weatherLoading,refetch:weatherRefetch} = useWeatherData<WeatherResponse>(coordinates);


    React.useEffect(()=>{
        forecastRefetch();
        weatherRefetch();
   
        },[lat,lon])
    return <>
    <div className="space-y-5">
                <FavoriteButton data={{...weatherData , name: params.cityName }} />
                <GridContainer cols={12} className='gap-6 p-2 mt-4 '>
                    <WeatherCard Data={weatherData??null} loadingWeather={weatherLoading}  /> 
                    <HourlyChart data={forecastData??null} isLoading={forecastLoading} />
                    <WeatherDetails data={weatherData??null} />
                    <Forecast data={forecastData??null} />
                </GridContainer>
                    

        </div>
    </>
}

export default City;
