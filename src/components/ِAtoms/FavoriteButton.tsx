import { useFavorites } from '@/Hooks/useFavorite';
import { WeatherData } from '@/interfaces/WeatherResponse'
import { StarIcon } from 'lucide-react'
    interface PassedProp {
        data : WeatherData
    }
const FavoriteButton = ({data}:PassedProp) => {
    console.log(data);
    const {addToFavorites,removeFavorite,isFavorite}=useFavorites();
    const isCurrentlyFavorite = isFavorite(data?.coord?.lat ?? 0,data?.coord?.lon ??0);
    const handleToggle = ()=>{
        if(isCurrentlyFavorite){
            removeFavorite.mutate(`${data?.coord?.lat ??0 }-${data?.coord?.lon ??0}`);
    }   else {
        addToFavorites.mutate({
            name:data?.name,
            lat:data?.coord.lat,
            lon:data?.coord.lon,
            country:data?.sys.country
        })}
    }

    return <>
                <div className='flex justify-end items-center'>
                    <StarIcon onClick={handleToggle} className={`h-6 w-6 cursor-pointer text-black dark:text-yellow-500 ${isCurrentlyFavorite ? 'fill-yellow-500' : ''} `} />
                </div>
    </>
}

export default FavoriteButton;
