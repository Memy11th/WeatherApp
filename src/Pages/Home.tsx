import Reloader from "@/components/ِAtoms/Reloader";
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
                <Reloader isLoading={isLoading} />
        </div>
    )
}

export default Home
