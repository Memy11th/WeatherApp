import { Coordinates } from "./coordinates";

export interface LocationDetails {
    coordinates:Coordinates,
    error: string | null,
    isLoading: boolean
}