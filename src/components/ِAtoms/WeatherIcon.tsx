import { useGeoLocation } from "@/Hooks/useLocation";
import { useWeatherData } from "@/Hooks/useWeatherData";
import { WeatherResponse } from "@/interfaces/WeatherResponse";

const WeatherIcon = () => {
            const {coordinates}=useGeoLocation();
            const weatherQuery = useWeatherData<WeatherResponse>(coordinates);
    
    return <>
        <div className="flex flex-col gap-0 aspect-square items-center justify-center">
                <img
                    src={`https://openweathermap.org/img/wn/${weatherQuery.data?.weather[0].icon}@4x.png`}
                    alt={weatherQuery.data?.weather[0].description}
                    className=" object-contain h-24 w-24 "
                    draggable={false}
                />
                <div className=" text-center">
                    <p className="text-sm font-medium text-muted-foreground capitalize">
                        {weatherQuery.data?.weather[0].description}
                    </p>
                </div>
                </div>
    </>
}

export default WeatherIcon
