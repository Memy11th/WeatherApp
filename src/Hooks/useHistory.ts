import { SearchedCity } from "@/interfaces/SearchResult"
import { useLocalStorage } from "./useLocalStorage"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useSearchHistory =()=>{
    const [history,setHistory] = useLocalStorage<SearchedCity[]>("searchHistory",[]);
    const QueryClient = useQueryClient();
    const historyQuery = useQuery({
        queryKey:["searchHistory"],
        queryFn:()=>history,
        initialData:history
    });

    const addToHistory = useMutation({
        mutationFn : async(search:Omit<SearchedCity , 'id'|'searchedAt'>)=>{
            const newSearch : SearchedCity = {
                ...search,
                searchedAt:Date.now(),
                id: `${search.lat}-${search.lon}-${Date.now()}`
            } 
            const filteredHistory = history.filter((city)=> !(city.lat === search.lat && city.lon === search.lon));
            const newHistory = [newSearch,...filteredHistory].slice(0,10);
            setHistory(newHistory);
            return newHistory;
        },
        onSuccess:(newHistory)=>QueryClient.setQueryData(["searchHistory"],newHistory)
    
    });

    const removeFromHistory = useMutation({
        mutationFn : async()=>{
            setHistory([]);
            return [];
        },
        onSuccess:()=>QueryClient.setQueryData(["searchHistory"],[])
    });
    return {history : historyQuery.data??[] , addToHistory , removeFromHistory};
}