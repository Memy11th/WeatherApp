import { useGeoLocation } from "@/Hooks/useLocation"
import React from 'react'

const Home = () => {  
    const {coordinates,error,isLoading,getLocation}=useGeoLocation();
    console.log(coordinates)
    React.useEffect(()=>{
        getLocation();
    },[])
    return (
        <div>
                5e5w5e5w5e5w5e
        </div>
    )
}

export default Home
