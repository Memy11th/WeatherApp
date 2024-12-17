import { Coordinates } from '@/interfaces/coordinates'
import { RefreshCcw } from 'lucide-react'

const Reloader = ({isLoading , coordinates,cityName ,countryName}:{isLoading:boolean,coordinates:Coordinates|null , cityName:string|null,countryName:string|null}) => {
    const handleRefresh = ()=>{
        if(!coordinates){
            // Refetch weather data
    }
    }
    return <>
        <div className='flex justify-between'>
            <h1>{cityName},{countryName}</h1>
            <button disabled={isLoading} className='bg-slate-100 dark:bg-slate-900 p-2 rounded-xl' onClick={handleRefresh}>
                <RefreshCcw  className={` h-4 w-4 ${isLoading ? 'animate-spin text-rose-600 ' : '' }`} />
            </button>
            
        </div>
        </>
}


export default Reloader
