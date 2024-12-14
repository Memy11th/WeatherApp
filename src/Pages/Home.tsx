import { LocationError } from "@/components/ِAtoms/LocationError";
import Reloader from "@/components/ِAtoms/Reloader";
import { useGeoLocation } from "@/Hooks/useLocation";
import { useWeatherData } from "@/Hooks/useWeatherData";
import React from 'react';


const Home = () => {  
    const {coordinates,error,isLoading,getLocation}=useGeoLocation();
    const weatherQuery = useWeatherData(coordinates);
    console.log(weatherQuery)


    React.useEffect(()=>{
        getLocation();
    },[]);

    if(error ){
    return <>
        <LocationError error={error} ErrType={`Location Error`} />
    </>
    }  
    if(!coordinates ){
        return(
            <LocationError error='Please enable access to location'  ErrType={`Location Error`} />

        ) 
    }
    
    return (
        <div>
                5e5w5e5w5e5w5e
                <Reloader isLoading={isLoading} coordinates={coordinates} />
        </div>
    )
}

export default Home
