import { AlertCircle, MapPin } from "lucide-react";
import {Alert,AlertDescription,AlertTitle,} from "@/components/ui/alert";
import { Button } from "../ui/button";

export function LocationError({error,Fn,ErrType}:{error:string,Fn:()=>void,ErrType:string}) {
    return (
        <Alert variant="destructive">
        <AlertCircle  className="h-4 w-4" />
        <AlertTitle>{ErrType}</AlertTitle>
        <AlertDescription>
            <p>{error}</p>
            <Button className="dark:bg-gray-900 bg-slate-100 text-black dark:text-white  " onClick={Fn}>
                <MapPin className="h-4 w-4  " />
                Enable Location
                </Button>
        </AlertDescription>
        </Alert>
    )
}