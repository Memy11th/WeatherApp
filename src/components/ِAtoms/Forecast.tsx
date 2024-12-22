import { useGeoLocation } from "@/Hooks/useLocation";
import { useForecast } from "@/Hooks/useWeatherData";
import { ForecastResponse } from "@/interfaces/ForecastResponse";

const Forecast = () => {
    const {coordinates}=useGeoLocation();
    const forecastQuery = useForecast<ForecastResponse>(coordinates);
    return <>
        <div className="md:col-span-6 col-span-12  bg-blue-300/35 dark:bg-slate-800/35 rounded-xl p-4 space-y-3 ">
            <h4 className="text-muted-foreground">5-Days Forecast</h4>
        </div>
    </>
}

export default Forecast
