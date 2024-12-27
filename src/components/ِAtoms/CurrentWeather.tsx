import { useGeoLocation } from "@/Hooks/useLocation";
import { useWeatherData } from "@/Hooks/useWeatherData";
import { WeatherResponse } from "@/interfaces/WeatherResponse";
import { ArrowDown, ArrowUp, Droplets, Gauge, Wind } from "lucide-react";

const CurrentWeather = () => {
        const {coordinates}=useGeoLocation();
        const weatherQuery = useWeatherData<WeatherResponse>(coordinates);
        const FormatTemp = (temp:number)=>{
                const newTemp =`${Math.round(temp)}°C` ;
                return newTemp as string
        }


    
    return <>
        <div className="">
            <h3>{weatherQuery?.data?.name} , 
            <span className="text-muted-foreground">
            {weatherQuery?.data?.sys.country}
            </span>
            </h3>
            

            <div>
                <div className="flex gap-6 space-y-3 justify-center items-center">
                        <div>
                            <h1 className="text-4xl font-extrabold">{FormatTemp(weatherQuery?.data?.main.temp ?? 0)}</h1>
                        </div>
                        <div className="flex flex-col">
                        <p className="text-muted-foreground text-sm">
                            feels like {FormatTemp(weatherQuery?.data?.main.feels_like ?? 0)}
                        </p>
                        <div className="flex justify-center  items-center gap-4">
                            <span className="flex items-center justify-center">
                            <ArrowDown className={'h-4 w-4 text-blue-600'} />
                            {FormatTemp(weatherQuery?.data?.main.temp_min ?? 0)}
                            </span>
                            <span className="flex items-center justify-center">
                            <ArrowUp className={'h-4 w-4 text-red-600'} />
                            {FormatTemp(weatherQuery?.data?.main.temp_max ?? 0)}
                            </span>
                        </div>
                        
                        </div>
                        

                        
                        
                </div>
                <div className="flex gap-6  items-center ">
                    <div className="flex flex-col gap-0">
                        <h4 className="font-medium text-sm text-muted-foreground ">Humidity</h4>
                    <span className="text-blue-600 flex items-center gap-1">
                                <Droplets className="h-4 w-4" />
                                <span className="text-muted-foreground  text-sm">{weatherQuery?.data?.main.humidity}%</span>
                            </span>
                    </div>
                            
                    <div className="flex flex-col gap-0">
                        <h4 className="font-medium text-sm text-muted-foreground ">Wind speed</h4>
                    <span className="text-blue-600 flex items-center gap-1">
                                <Wind className="h-4 w-4" />
                                <span className="text-muted-foreground  text-sm ">{weatherQuery?.data?.wind.speed} <span className="text-sm text-muted-foreground">m/s</span> </span>
                            </span>
                    </div>

                    <div className="flex flex-col gap-0">
                        <h4 className="font-medium text-sm text-muted-foreground ">Pressure</h4>
                    <span className="text-blue-600 flex items-center gap-1">
                                <Gauge className="h-4 w-4" />
                                <span className="text-muted-foreground text-sm ">{weatherQuery?.data?.main.pressure} <span className="text-sm text-muted-foreground">hPa</span> </span>
                            </span>
                    </div>
                    
                    
                        </div>
            </div>
            
        </div>
    
    </>
}

export default CurrentWeather
