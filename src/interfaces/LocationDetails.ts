import { Coordinates } from "./coordinates";

export interface LocationDetails {
    coordinates:Coordinates|null,
    error: string | null,
    isLoading: boolean
}