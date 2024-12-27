import React from 'react';
import {CommandDialog,Command,CommandEmpty,CommandGroup,CommandInput,CommandItem,CommandList,CommandSeparator} from "@/components/ui/command"
import { Button } from '../ui/button';
import { Clock, Heart, Search, SearchIcon, StarIcon } from 'lucide-react';
import { useSearchCity } from '@/Hooks/useSearchCity';
import { useSearchHistory } from '@/Hooks/useHistory';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { useFavorites } from '@/Hooks/useFavorite';
const SearchBar = () => {
    const navigate = useNavigate();
    const {history,addToHistory,clearHistory} = useSearchHistory();
    const {favorites,addToFavorites,isFavorite} = useFavorites();
    const [open , setOpen] = React.useState(false)
    const [query,setQuery] = React.useState('')
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setQuery(e.target.value)
    }
    const handleSelect = (cityData:string)=>{
        const [lat,lon,name,country] = cityData.split("|");
        addToHistory.mutate({
            query,
            name,
            lat : parseFloat(lat),
            lon : parseFloat(lon),
            country,
        });
        setOpen(false);
        navigate(`/city/${name}?lat=${lat}&lon=${lon}`);
        setQuery('');

    }
    const {isLoading,data} = useSearchCity(query);
    const Results = Object.values(data??{});
    console.log(Results);

    // useEffect to open the search command by clicking CTRL+S
    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "s" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
            }
            document.addEventListener("keydown", down)
            return () => document.removeEventListener("keydown", down)
        }, []);

        // a useEffect to refresh the search results when the query changes
        React.useEffect(()=>{   
        },[query])
        console.log(history);

        return (
            <>
            <Button variant="outline" className="relative hover:bg-slate-300 dark:hover:bg-slate-800/35 bg-slate-200 dark:bg-slate-800/35 w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64" onClick={() => setOpen(true)}>
            <Search className="mr-2 h-4 w-4" />
            Search cities CTRL+S / ⌘+S
            </Button>
    
            <CommandDialog open={open} onOpenChange={setOpen}>
                <Command>
            <CommandInput onInputCapture={handleSearch} value={query} placeholder="Search cities" />
            
            <CommandList>
            <CommandEmpty>Type to search...</CommandEmpty>

                {!isLoading && Results.length === 0 && query.length > 2 && <>
                    <CommandEmpty>No results found.</CommandEmpty>
                </>}
                {favorites.length > 0 && <>
                    <CommandGroup heading='Favorite Cities'>
                    <div className='flex justify-between text-muted-foreground text-xs items-center'>
                        <span>
                            <StarIcon className='h-4 w-4' />
                        </span>
                        <button onClick={()=>navigate('/favorites')} className=' underline p-1 text-xs  '>
                            Visit favorites
                        </button>
                    </div>

                    {favorites.map((city)=>(
                        <CommandItem
                        key={city.id}
                        value={`${city.lat}|${city.lon}|${city.name}|${city.country}`}
                        onSelect={handleSelect}
                        className='cursor-pointer'
                        > 
                            <span>{city.name}</span>
                            {city.state && (
                            <span className="text-sm text-muted-foreground">
                                , {city.state}
                            </span>
                            )},
                            <span>{city.country}</span>

                        </CommandItem>))}
                    </CommandGroup>
                    <CommandSeparator/>
                </>}
                {history.length > 0 &&<>
                <CommandGroup heading='Recent Search'>
                    <div className='flex justify-between text-muted-foreground text-xs items-center'>
                        <span>
                            <SearchIcon className='h-4 w-4' />
                        </span>
                        <button onClick={()=>clearHistory.mutate()} className=' underline p-1 text-xs  '>
                            Clear all
                        </button>
                    </div>
                    {history.map((item)=>(
                            <CommandItem
                            key={item.id}
                            value={`${item.lat}|${item.lon}|${item.name}|${item.country}`}
                            onSelect={handleSelect}
                            className='cursor-pointer'
                            >
                            <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                            <span>{item.name}</span>
                            {item.state && (
                            <span className="text-sm text-muted-foreground">
                                , {item.state}
                            </span>
                            )}
                            <span className="text-sm text-muted-foreground">
                            , {item.country}
                            </span>
                            <span className="ml-auto text-xs text-muted-foreground">
                            {format(item.searchedAt, "MMM d, h:mm a")}
                            </span>
                        </CommandItem>
                    ))}
                    <CommandItem>
                        {/* Recent searches here*/}
                    </CommandItem>
                </CommandGroup>
                <CommandSeparator/></>}
                
                {query.length >= 3 ? (<CommandGroup heading="Suggestions">
                    {Results?.map((city)=>(<CommandItem key={city.lat}  value={`${city.lat}|${city.lon}|${city.name}|${city.country}`} onSelect={handleSelect} >
                    <span>{city.name}</span>
                    {city.state && (
                        <span className="text-sm text-muted-foreground">
                            , {city.state}
                        </span>
                        )}
                        <span className="text-sm text-muted-foreground">
                        , {city.country}
                        </span></CommandItem>))}
                        
                </CommandGroup>) : null}
                
            </CommandList>
            </Command>
            </CommandDialog>

            </>
        )
}

export default SearchBar
