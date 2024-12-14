import { LocationError } from "@/components/ِAtoms/LocationError";
import Reloader from "@/components/ِAtoms/Reloader";
import { useGeoLocation } from "@/Hooks/useLocation"
import React from 'react'


const Home = () => {  
    const {coordinates,error,isLoading,getLocation}=useGeoLocation();
    console.log(coordinates)
    React.useEffect(()=>{
        getLocation();
    },[]);

    if(error){
    return <>
        <LocationError error={error} Fn={getLocation} ErrType={`Location Error`} />
    </>
    }  
    if(!coordinates){
       return(
        <LocationError error='Please enable access to location' Fn={getLocation} ErrType={`Location Error`} />

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
