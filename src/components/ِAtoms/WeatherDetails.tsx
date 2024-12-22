import { useWeatherData } from "@/Hooks/useWeatherData";
import { WeatherResponse } from "@/interfaces/WeatherResponse";
import SingleInfo from "./SingleInfo"
import { useGeoLocation } from "@/Hooks/useLocation";
import { Compass, Droplet, Gauge, Grid, MapPin, Sunrise, Sunset, Target, Thermometer } from "lucide-react";
import { format } from "date-fns";
import GridContainer from "./GridContainer";

const WeatherDetails = () => {
    const {coordinates}=useGeoLocation();
    const weatherQuery = useWeatherData<WeatherResponse>(coordinates);
    const Details = weatherQuery.data? [
        {
            name:'Sunrise',
            icon:<Sunrise className="text-yellow-500"/>,
            value:format(new Date(weatherQuery.data?.sys?.sunrise *1000),'hh:mm a') ,
            unit:null,
            Key:5
        },
        {
            name:'Sunset',
            icon:<Sunset className="text-orange-500"/>,
            value:format(new Date(weatherQuery.data?.sys.sunset*1000),'hh:mm a'),
            unit:null,
            Key:6
        },
        {
            name:'Temperature',
            icon:<Thermometer className="text-red-600"/>,
            value: Math.round(weatherQuery.data?.main.temp)??0,
            unit:'°C',
            Key:2
        },
        {
            name:'Feels Like',
            icon:<Target  className="text-blue-600"/> ,
            value: Math.round(weatherQuery.data?.main.feels_like)??0,
            unit:'°C',
            Key:3
        },
        {
            name:'Humidity',
            icon:<Droplet className="text-blue-600"/>,
            value:weatherQuery.data?.main.humidity??0,
            unit : '%',
            Key:0
        },
        {
            name:'Pressure',
            icon:<Gauge className="text-blue-600" />,
            value:weatherQuery.data?.main.pressure??0,
            unit:'Pa',
            Key:1
        },
        
        {
            name:'Wind',
            icon:<Compass className="text-green-600"/>,
            value: weatherQuery.data?.wind.deg??0,
            unit:'°deg',
            Key:4
        },
        {
            name:'Coordinates',
            icon:<MapPin className="text-green-600" />,
            value:`Lat:${weatherQuery.data?.coord.lat}  Lon:${weatherQuery.data?.coord.lon}` ,
            unit:null,
            Key:7,
        }
        
    ] : [];
    return <>       
                <div className="col-span-12 md:col-span-6  gap-4 bg-blue-300/35 dark:bg-slate-800/35 rounded-xl p-4 ">
                <h4 className="text-muted-foreground">Weather Details</h4>    

                <GridContainer cols={12} className="gap-4 justify-between items-center "> 
                { Details.map((item)=>(
                    <SingleInfo
                    key={item.Key} 
                    name={item.name} 
                    icon={item.icon} 
                    value={item.value}
                    Unit ={item.unit}
                    />

                    
                    ))}
                </GridContainer>
                </div>
                
    </>
}

export default WeatherDetails
