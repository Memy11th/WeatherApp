export interface LocationDetails {
    coordinates:{
        lat: number | null,
        lon:number|null
    },
    error: string | null,
    isLoading: boolean
}