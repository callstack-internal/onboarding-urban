export interface Weather {
  coord: {
    lon: number;
    lat: number;
  };
  sys: {
    country: string;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
  weather: [
    {
      id: number;
      icon: string;
      main: string;
      description: string;
    }
  ];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  id: number;
  name: string;
}

export interface Error {
  error: any;
  data?: any;
  message: string;
}

export interface GetWeatherResponse {
  cnt: number;
  list: Weather[];
}
