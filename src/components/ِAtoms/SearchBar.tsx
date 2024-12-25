import React from 'react';
import {CommandDialog,Command,CommandEmpty,CommandGroup,CommandInput,CommandItem,CommandList,CommandSeparator,CommandShortcut,} from "@/components/ui/command"
import { Button } from '../ui/button';
import { Search, Star } from 'lucide-react';
import { useSearchCity } from '@/Hooks/useSearchCity';
import { DialogTitle } from '../ui/dialog';
const SearchBar = () => {
    const [open , setOpen] = React.useState(false)
    const [query,setQuery] = React.useState('')
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setQuery(e.target.value)
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
        }, [])

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
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                    {Results.map((city)=>(<CommandItem key={city.lat}  value={city.name} >
                    <span>{city.name}</span>
                    {city.state && (
                        <span className="text-sm text-muted-foreground">
                            , {city.state}
                        </span>
                        )}
                        <span className="text-sm text-muted-foreground">
                        , {city.country}
                        </span></CommandItem>))}
                        
                </CommandGroup>
            </CommandList>
            </Command>
            </CommandDialog>

            </>
        )
}

export default SearchBar
