import { useLocalStorage } from './useLocalStorage';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
export interface FavoriteCity {
    id: string;
    name: string;
    lat: number;
    lon: number;
    country: string;
    state?: string;
    addedAt: number;
}
export const useFavorites = ()=>{
    const [favorites,setFavorites] = useLocalStorage<FavoriteCity[]>('favorites',[]);
    const queryclient = useQueryClient();

    const favoriteQuery = useQuery({
        queryKey:['favorites'],
        queryFn:()=>favorites,
        initialData:favorites,
        staleTime:Infinity
    });

    const addToFavorites = useMutation({
        mutationFn : async(city:Omit<FavoriteCity , 'id'|'addedAt'>)=>{
            const newFavorite : FavoriteCity = {
                ...city,
                addedAt:Date.now(),
                id: `${city.lat}-${city.lon}`
            } 
            const exists = favorites.some((fav)=> fav.id === newFavorite.id);
            if(exists) return favorites;

            const newFavorites = [...favorites,newFavorite];
            setFavorites(newFavorites);
            return newFavorites;
        },
        onSuccess: ()=>{
            queryclient.invalidateQueries({queryKey:['favorites']});
        }
    
    });

    const removeFavorite = useMutation({
        mutationFn : async(id:string)=>{
            const newFavorites = favorites.filter((city)=> city.id !== id);
            setFavorites(newFavorites);
            return newFavorites;
        },
        onSuccess: ()=>{
            queryclient.invalidateQueries({queryKey:['favorites']});
        }
    })


    return {favorites:favoriteQuery.data ?? [],addToFavorites,
        removeFavorite,
        isFavorite:(lat:number,lon:number)=>{
            favorites.some((city)=> city.lat === lat && city.lon===lon)
    }}
}