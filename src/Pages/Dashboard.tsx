import Forecast from "@/components/ِAtoms/Forecast";
import GridContainer from "@/components/ِAtoms/GridContainer";
import HourlyChart from "@/components/ِAtoms/HourlyChart";
import { LocationError } from "@/components/ِAtoms/LocationError";
import Reloader from "@/components/ِAtoms/Reloader";
import WeatherCard from "@/components/ِAtoms/WeatherCard";
import WeatherDetails from "@/components/ِAtoms/WeatherDetails";
import { useGeoLocation } from "@/Hooks/useLocation";
import { useForecast, useWeatherData } from "@/Hooks/useWeatherData";
import { ForecastResponse } from "@/interfaces/ForecastResponse";
import { WeatherResponse } from "@/interfaces/WeatherResponse";

import React from 'react';


const Dashboard = () => {  
    const {coordinates,error,isLoading:locationLoading,getLocation}=useGeoLocation();
    const {data:weatherData,isLoading:weatherLoading} = useWeatherData<WeatherResponse>(coordinates);
    const weatherQuery = useWeatherData<WeatherResponse>(coordinates);
    const {data:forecastData,isLoading:forecastLoading} = useForecast<ForecastResponse>(coordinates)

    

    React.useEffect(()=>{
        getLocation();
    },[]);
    React.useEffect(()=>{
        weatherQuery.refetch();
    },[coordinates])

    
    if(error && !locationLoading ){
    return <>
        <LocationError error={error} ErrType={`Location Error`} />
    </>
    }  
    if(!coordinates&& !locationLoading ){
        return(
            <LocationError error='Please enable access to location'  ErrType={`Location Error`} />

        ) 
    }
    
    return (
        <div className="space-y-5">
                <Reloader isLoading={locationLoading} coordinates={coordinates} />
                <GridContainer cols={12} className='gap-6 p-2 mt-4 '>
                    <WeatherCard Data={weatherData??null} loadingWeather={weatherLoading} loadingLocation={locationLoading} /> 
                    <HourlyChart data={forecastData??null} isLoading={forecastLoading} />
                    <WeatherDetails data={weatherData??null} />
                    <Forecast data={forecastData??null} />
                </GridContainer>
                    

        </div>
    )
}

export default Dashboard
