import { RefreshCcw } from 'lucide-react'
import React from 'react'

const Reloader = ({isLoading}:{isLoading:boolean}) => {
    return (
        <div className='flex justify-between'>
            <h1>My location</h1>
            <RefreshCcw  className={`${isLoading ? 'animate-spin' : '' }`} />
        </div>
    )
}

export default Reloader
