import Forecast from "@/components/ِAtoms/Forecast";
import GridContainer from "@/components/ِAtoms/GridContainer";
import HourlyChart from "@/components/ِAtoms/HourlyChart";
import { LocationError } from "@/components/ِAtoms/LocationError";
import MiniFavCard from "@/components/ِAtoms/MiniFavCard";
import Reloader from "@/components/ِAtoms/Reloader";
import WeatherCard from "@/components/ِAtoms/WeatherCard";
import WeatherDetails from "@/components/ِAtoms/WeatherDetails";
import { useFavorites } from "@/Hooks/useFavorite";
import { useGeoLocation } from "@/Hooks/useLocation";
import { useForecast, useWeatherData } from "@/Hooks/useWeatherData";
import { ForecastResponse } from "@/interfaces/ForecastResponse";
import { WeatherResponse } from "@/interfaces/WeatherResponse";

import React from 'react';


const Dashboard = () => {  
    const {coordinates,error,isLoading:locationLoading,getLocation}=useGeoLocation();
    const {data:weatherData,isLoading:weatherLoading,refetch:weatherRefetch} = useWeatherData<WeatherResponse>(coordinates);
    const {data:forecastData,isLoading:forecastLoading,refetch:forecastRefetch} = useForecast<ForecastResponse>(coordinates)
    const {favorites } = useFavorites();
    console.log(favorites)
    

    React.useEffect(()=>{
        getLocation();
    },[]);
    React.useEffect(()=>{
        weatherRefetch();
        forecastRefetch();
    },[coordinates])
    React.useEffect(()=>{
        
    },[favorites])

    
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

            {favorites.length === 0 && <h4 className="text-muted-foreground text-center font-bold">No favorite cities</h4>}
            {favorites.length >0 && <h4 className="text-muted-foreground  font-bold">Favorite Cities</h4>}
            <GridContainer cols={12} className='gap-6 p-2 '>
            {favorites.slice(0,4).map((city)=> <MiniFavCard City={city} key={city.id} />)}
            </GridContainer>
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
