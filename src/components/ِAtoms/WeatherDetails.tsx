import { useWeatherData } from "@/Hooks/useWeatherData";
import { WeatherResponse } from "@/interfaces/WeatherResponse";
import SingleInfo from "./SingleInfo"
import { useGeoLocation } from "@/Hooks/useLocation";
import { Compass, Droplet, Gauge, Sunrise, Sunset, Thermometer } from "lucide-react";
import { format } from "date-fns";

const WeatherDetails = () => {
    const {coordinates}=useGeoLocation();
    const weatherQuery = useWeatherData<WeatherResponse>(coordinates);
    const Details = [
        {
            name:'Humidity',
            icon:<Droplet/>,
            value:weatherQuery.data?.main.humidity,
            Key:0
        },
        {
            name:'Pressure',
            icon:<Gauge/>,
            value:weatherQuery.data?.main.pressure,
            Key:1
        },
        {
            name:'Temperature',
            icon:<Thermometer/>,
            value: weatherQuery.data?.main.temp,
            Key:2
        },
        {
            name:'Feels Like',
            icon:<Thermometer/>,
            value: weatherQuery.data?.main.feels_like,
            Key:3
        },
        {
            name:'Wind',
            icon:<Compass/>,
            value:{
                speed: weatherQuery.data?.wind.speed,
                direction: weatherQuery.data?.wind.deg
            },
            Key:4
        },
        {
            name:'Sunrise',
            icon:<Sunrise/>,
            value:format(new Date(weatherQuery.data?.sys.sunrise ?? 0 *1000),'ha'),
            Key:5
        },
        {
            name:'Sunset',
            icon:<Sunset/>,
            value:format(new Date(weatherQuery.data?.sys.sunset ?? 0 *1000),'ha'),
            Key:6
        }
    ]
    return <>
        <div className='col-span-12 md:col-span-5  bg-blue-300/35 dark:bg-slate-800/35 rounded-xl p-4'>
                {Details.map((item)=>(
                    <SingleInfo
                    key={item.Key}
                    name={item.name} 
                    icon={item.icon} 
                    value={item.value}
                    />
                    ))}
                
        </div>
    </>
}

export default WeatherDetails
