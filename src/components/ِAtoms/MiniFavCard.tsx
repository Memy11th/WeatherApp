import { FavoriteCity, useFavorites } from "@/Hooks/useFavorite"
import { useWeatherData } from "@/Hooks/useWeatherData";
import { ArrowDown, ArrowUp, XCircle } from "lucide-react";

const MiniFavCard = ({City}:{City:FavoriteCity}) => {
        const coordinates = { lat: City.lat, lon: City.lon };
        const weatherQuery = useWeatherData(coordinates);
        const {removeFavorite} = useFavorites();
        
    return  <>
        <div className=" col-span-3  relative p-4 rounded-xl text-muted-foreground bg-slate-200 dark:bg-slate-800/35  flex justify-center gap-4 items-center">
            <XCircle onClick={()=>removeFavorite.mutate(`${City.lat}-${City.lon}`)} className="absolute top-1 right-1 w-4 h-4 cursor-pointer" />
            <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center items-center">
                <ArrowDown className="text-blue-500 w-4 h-4 " />
                <span>{Math.floor(weatherQuery.data?.main.temp_min ?? 0) }</span>
                </div>
                <div className="flex justify-center items-center">
                <ArrowUp className="text-red-500 w-4 h-4 " />
                <span>{Math.ceil(weatherQuery.data?.main.temp_max ?? 0)}</span>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <span>{City.name},{City.country}</span>
                <span>{weatherQuery.data?.weather[0].main}</span>
            </div>
        </div>
    </>
}

export default MiniFavCard
