import { AlertCircle, MapPin } from "lucide-react";
import {Alert,AlertDescription,AlertTitle,} from "@/components/ui/alert";
import { Button } from "../ui/button";
import { useGeoLocation } from "@/Hooks/useLocation";

export function LocationError({error,ErrType}:{error:string,ErrType:string}) {
    const {getLocation,isLoading} = useGeoLocation();
    return (<div >
        <Alert variant="destructive">
        <AlertCircle  className="h-4 w-4" />
        <AlertTitle>{ErrType}</AlertTitle>
        <AlertDescription>
            <p>{error}</p>
            <Button className="  " onClick={()=>{getLocation();console.log(isLoading)}}>
                <MapPin className="h-4 w-4  " />
                Enable Location
                </Button>
        </AlertDescription>
        </Alert>
        </div>
    )
}