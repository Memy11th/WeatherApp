import { LocationDetails } from '@/interfaces/LocationDetails'
import React, { useEffect } from 'react'
export function useGeoLocation(){
    const [Location , setLocation] = React.useState<LocationDetails>({
        coordinates:null,
        error:null,
        isLoading:true,
    });

    const getLocation = ()=>{
            if(!navigator.geolocation){
                setLocation({
                    coordinates :null,
                    error:"Geolocation is not accessed by this browser",
                    isLoading:false
                })
                return;
            }
            navigator.geolocation.getCurrentPosition((position)=>{
                    setLocation({
                        coordinates :{
                            lat:position.coords.latitude,
                            lon:position.coords.longitude
                        },
                        error:null,
                        isLoading:false
                    })
            },(err)=>{
                let errMessage='';
                switch(err.code){
                    case err.PERMISSION_DENIED:
                        errMessage = "Permission Denied";
                        break;
                    case err.POSITION_UNAVAILABLE:
                        errMessage = "Position Unavailable";
                        break;
                    case err.TIMEOUT:
                        errMessage = "Timeout";
                        break;
                    default :
                        errMessage = "Unknown Error";
                }
                setLocation({
                    coordinates :null,
                    error: errMessage,
                    isLoading:false
                })
            },{
                enableHighAccuracy:true,
                timeout:15000,
                maximumAge:1000
            });
    }

    useEffect(()=>{
        getLocation();
    },[])

    return {
        ...Location,
        getLocation
    }
}