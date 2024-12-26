export interface SearchedCity {
    name: string;
    country: string;
    lat: number;
    lon: number;
    state?:string,
    query:string,
    id:string,
    searchedAt:number
}