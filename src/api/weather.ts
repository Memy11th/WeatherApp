import { Coordinates } from "@/interfaces/coordinates";
import { API_CONFIG } from "./config";

class Weather {
    private createUrl(Endpoint:string , params:Record<string,string|number>) {
        const searchParams = new URLSearchParams({
            ...params,
            appid : API_CONFIG.API_KEY
        })
        return `${Endpoint}?${searchParams.toString()}`;
    };
    private async fetchData(url:string):Promise<unknown>{
            const res = await fetch(url);
            if(!res.ok){
                throw new Error(`Weather Api Error: ${res.statusText}`);
            }

            return res.json();
    };

    async getCurrentWeather({lat,lon}:Coordinates) {
        const url = this.createUrl(`${API_CONFIG.BASE_URL}/weather`, {
            lat:lat.toString(),
            lon:lon.toString(),
            units: API_CONFIG.DEFAULT_PARAMS.units,
            appid: API_CONFIG.DEFAULT_PARAMS.appid
        });
        return this.fetchData(url);
    };
    
    async getForecast(lat:number, lon:number) {
        const url = this.createUrl(`${API_CONFIG.BASE_URL}/forecast`, {
            lat:lat.toString(),
            lon:lon.toString(),
            units: API_CONFIG.DEFAULT_PARAMS.units,
            appid: API_CONFIG.DEFAULT_PARAMS.appid
        });
        return this.fetchData(url);
    };

    async reverseGeocode(lat:number, lon:number) {
        const url = this.createUrl(`${API_CONFIG.GEO}/reverse`, {
            lat:lat.toString(),
            lon:lon.toString(),
            limit:1,
            appid: API_CONFIG.DEFAULT_PARAMS.appid
        });
        return this.fetchData(url);
    };
}

export const WeatherApi = new Weather();
