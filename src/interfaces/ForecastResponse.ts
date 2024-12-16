export interface ForecastResponse {
    city: City; // Information about the city
    cnt: number; // Number of forecast data points
    cod: string; // Response code
    list: WeatherData[]; // Array of weather data
    message: number; // Optional message field
  }
  
  // City details
  interface City {
    id: number; // City ID
    name: string; // City name
    coord: Coordinates; // Geographical coordinates
    country: string; // Country code (ISO format)
    population: number; // Population of the city
    timezone?: number; // Timezone offset in seconds (optional)
    sunrise?: number; // Sunrise time in Unix timestamp (optional)
    sunset?: number; // Sunset time in Unix timestamp (optional)
  }
  
  // Geographical coordinates
  interface Coordinates {
    lat: number; // Latitude
    lon: number; // Longitude
  }
  
  // Individual weather data points
  interface WeatherData {
    dt: number; // Forecast time in Unix timestamp
    main: MainWeather; // Main weather parameters
    weather: WeatherCondition[]; // Array of weather condition details
    clouds: Clouds; // Cloud data
    wind: Wind; // Wind details
    visibility?: number; // Visibility in meters (optional)
    pop?: number; // Probability of precipitation (optional)
    sys?: Sys; // System information (e.g., day or night)
    dt_txt?: string; // Forecast date-time in human-readable format (optional)
  }
  
  // Main weather parameters
  interface MainWeather {
    temp: number; // Current temperature
    feels_like: number; // Feels like temperature
    temp_min: number; // Minimum temperature
    temp_max: number; // Maximum temperature
    pressure: number; // Atmospheric pressure
    sea_level?: number; // Sea-level pressure (optional)
    grnd_level?: number; // Ground-level pressure (optional)
    humidity: number; // Humidity percentage
  }
  
  // Weather condition details
  interface WeatherCondition {
    id: number; // Weather condition ID
    main: string; // Main weather group (e.g., "Clear", "Clouds")
    description: string; // Detailed weather description
    icon: string; // Weather icon ID
  }
  
  // Cloud information
  interface Clouds {
    all: number; // Cloudiness percentage
  }
  
  // Wind details
  interface Wind {
    speed: number; // Wind speed
    deg: number; // Wind direction in degrees
    gust?: number; // Wind gust speed (optional)
  }
  
  // System information
  interface Sys {
    pod: string; // Part of the day ("d" for day, "n" for night)
  }
  