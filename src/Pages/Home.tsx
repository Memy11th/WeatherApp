import { LocationError } from "@/components/ِAtoms/LocationError";
import Reloader from "@/components/ِAtoms/Reloader";
import { useGeoLocation } from "@/Hooks/useLocation"
import React from 'react'


const Home = () => {  
    const {coordinates,error,isLoading,getLocation}=useGeoLocation();

    
    React.useEffect(()=>{
        getLocation();
    },[]);

    if(error && !isLoading){
    return <>
        <LocationError error={error} ErrType={`Location Error`} />
    </>
    }  
    if(!coordinates && !isLoading){
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
