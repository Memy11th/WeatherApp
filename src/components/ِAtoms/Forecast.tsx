import { useGeoLocation } from "@/Hooks/useLocation";
import { useForecast } from "@/Hooks/useWeatherData";
import { ForecastResponse } from "@/interfaces/ForecastResponse";
import { format } from "date-fns";
import { ArrowDown, ArrowUp, Droplet, Wind } from "lucide-react";

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
    const nextFiveDays = Object.values(dailyForecast??{}).slice(0,5);
    return <>
        <div className="md:col-span-6 col-span-12   bg-blue-300/35 dark:bg-slate-800/35 rounded-xl p-4 space-y-3 ">
            <h4 className="text-muted-foreground">5-Days Forecast</h4>
                <div className="flex flex-col w-full h-full gap-6   ">
                        {nextFiveDays.map((Day)=>(
                            <div key={Day.date} className="flex justify-evenly items-center p-3 bg-white dark:bg-slate-900/35 rounded-xl">
                                <div className="flex flex-col justify-center items-center">
                                    <span className="text-sm text-muted-foreground">
                                            {format(new Date(Day.date *1000),'EEE , MMM  d')}
                                    </span>
                                    <p className="text-xs text-center">
                                        {Day.weather.description}
                                    </p>
                                </div>

                                <div className="flex justify-start items-center gap-3">
                                    <div className="flex justify-center items-center">
                                            <ArrowUp className="h-4 w-4 font-bold text-red-600" />
                                            <span className="text-sm text-muted-foreground">{Math.round(Day.temp_max)}℃</span>
                                    </div>
                                    <div className="flex justify-center items-center">
                                            <ArrowDown className="h-4 w-4 font-bold text-blue-600" />
                                            <span className="text-sm text-muted-foreground">{Math.round(Day.temp_min)}℃</span>
                                    </div>
                                </div>

                                <div className="flex justify-center items-center gap-3">
                                        <div className="flex flex-col justify-center items-center">
                                            <Droplet className="h-4 w-4 text-blue-600" />
                                            <span className="text-sm text-muted-foreground">{Day.humidity}%</span>
                                        </div>  
                                        <div className="flex flex-col justify-center items-center">
                                            <Wind className="h-4 w-4 text-blue-600" />
                                            <span className="text-sm text-muted-foreground">{Day.wind}m/s</span>
                                        </div>
                                </div>
                                    
                            </div>
                        ))}
                        
                </div>
        </div>
    </>
}

export default Forecast
