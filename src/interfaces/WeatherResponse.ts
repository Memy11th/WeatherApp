import { Coordinates } from "./coordinates";

    export interface WeatherResponse {
        base: string;
        name: string;
        clouds: {
        all: number;
        };
        cod: number;
        coord: {
        lat: number;
        lon: number;
        };
        dt: number;
        id: number;
        main: {
        feels_like: number;
        grnd_level: number;
        humidity: number;
        pressure: number;
        sea_level: number;
        temp: number;
        temp_max: number;
        temp_min: number;
        };
        sys: {
        country: string;
        id: number;
        sunrise: number;
        sunset: number;
        type: number;
        };
        timezone: number;
        visibility: number;
        weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
        }[];
        wind: {
        deg: number;
        gust: number;
        speed: number;
        };
    }

    export interface WeatherCondition {
        id: number;
        main: string;
        description: string;
        icon: string;
      }

    export interface WeatherData { 
        coord: Coordinates;
    weather: WeatherCondition[];
     main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
    country: string;
  };
  name: string;
  dt: number;
    }
