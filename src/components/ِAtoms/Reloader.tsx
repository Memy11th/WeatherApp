import { Coordinates } from '@/interfaces/coordinates'
import { RefreshCcw } from 'lucide-react'

const Reloader = ({isLoading , coordinates}:{isLoading:boolean,coordinates:Coordinates}) => {
    const handleRefresh = ()=>{
        if(!coordinates){
            // Refetch weather data
    }}
    return (
        <div className='flex justify-between'>
            <h1>My location</h1>
            <button onClick={handleRefresh}>
                <RefreshCcw  className={` h-4 w-4 ${isLoading ? 'animate-spin' : '' }`} />
            </button>
            
        </div>
    )
}


export default Reloader
