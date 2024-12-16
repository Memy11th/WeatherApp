import GridContainer from "@/components/ِAtoms/GridContainer";
import { LocationError } from "@/components/ِAtoms/LocationError";
import Reloader from "@/components/ِAtoms/Reloader";
import WeatherCard from "@/components/ِAtoms/WeatherCard";
import { useGeoLocation } from "@/Hooks/useLocation";
import { useForecast, useWeatherData } from "@/Hooks/useWeatherData";
import { ForecastResponse } from "@/interfaces/ForecastResponse";
import React from 'react';


const Home = () => {  
    const {coordinates,error,isLoading,getLocation}=useGeoLocation();
    const weatherQuery = useWeatherData(coordinates);
    const forecastQuery = useForecast<ForecastResponse>(coordinates);
    console.log(forecastQuery)
    console.log(weatherQuery)
    const forecast = forecastQuery?.data ?? null; 


    React.useEffect(()=>{
        getLocation();
    },[]);

    if(error && !isLoading ){
    return <>
        <LocationError error={error} ErrType={`Location Error`} />
    </>
    }  
    if(!coordinates&& !isLoading ){
        return(
            <LocationError error='Please enable access to location'  ErrType={`Location Error`} />

        ) 
    }
    
    return (
        <div>
                <Reloader isLoading={isLoading} coordinates={coordinates} />
                <GridContainer cols={12} >
                    <WeatherCard Forecast={forecast} />
                </GridContainer>

        </div>
    )
}

export default Home
