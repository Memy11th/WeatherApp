import { Skeleton } from "@/components/ui/skeleton";
import GridContainer from "@/components/ِAtoms/GridContainer";
import { LocationError } from "@/components/ِAtoms/LocationError";
import Reloader from "@/components/ِAtoms/Reloader";
import WeatherCard from "@/components/ِAtoms/WeatherCard";
import { useGeoLocation } from "@/Hooks/useLocation";
import { useForecast, useWeatherData } from "@/Hooks/useWeatherData";
import { ForecastResponse } from "@/interfaces/ForecastResponse";
import { WeatherResponse } from "@/interfaces/WeatherResponse";
import React from 'react';


const Home = () => {  
    const {coordinates,error,isLoading,getLocation}=useGeoLocation();
    const weatherQuery = useWeatherData<WeatherResponse>(coordinates);
    const forecastQuery = useForecast<ForecastResponse>(coordinates);
    console.log(forecastQuery)
    console.log(weatherQuery)
    const cityName = forecastQuery?.data?.city?.name ?? null;
    const countryNameRes = forecastQuery?.data?.city?.country ?? null


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
                <Reloader isLoading={isLoading} coordinates={coordinates} cityName={cityName} countryName={countryNameRes} />
                <GridContainer cols={12} className='gap-6 p-2 bg-slate-200/45 dark:bg-black/25 mt-4'>
                    <WeatherCard Forecast={forecastQuery?.data ?? null} Weather={weatherQuery?.data ?? null} /> 
                </GridContainer>


        </div>
    )
}

export default Home
