import { useGeoLocation } from "@/Hooks/useLocation";
import { useForecast } from "@/Hooks/useWeatherData";
import { ForecastResponse } from "@/interfaces/ForecastResponse";
import { format } from "date-fns";

interface DailyForecast{
    date: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  wind: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  };
}
const Forecast = () => {
    const {coordinates}=useGeoLocation();
    const forecastQuery = useForecast<ForecastResponse>(coordinates);
    const dailyForecast = forecastQuery.data?.list.reduce((acc,forecastValue)=>{
        const date = format(new Date(forecastValue.dt*1000),'yyyy-MM-dd');
        if(!acc[date]){
            acc[date]={
                temp_min:forecastValue.main.temp_min,
                temp_max:forecastValue.main.temp_max,
                humidity:forecastValue.main.humidity,
                wind:forecastValue.wind.speed,
                weather:forecastValue.weather[0],
                date:forecastValue.dt,
            }} else{
                acc[date].temp_min = Math.min(acc[date].temp_min,forecastValue.main.temp_min);
                acc[date].temp_max = Math.max(acc[date].temp_max,forecastValue.main.temp_max);
            };
            return acc;
        
    },{} as Record<string,DailyForecast> );
    console.log(dailyForecast)
    const nextFiveDays = Object.values(dailyForecast??{}).slice(1,6);
    console.log(nextFiveDays);
    return <>
        <div className="md:col-span-6 col-span-12  bg-blue-300/35 dark:bg-slate-800/35 rounded-xl p-4 space-y-3 ">
            <h4 className="text-muted-foreground">5-Days Forecast</h4>
        </div>
    </>
}

export default Forecast
