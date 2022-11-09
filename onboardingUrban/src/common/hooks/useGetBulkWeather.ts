import { useQuery } from "@tanstack/react-query";
import { getBulkWeatherForecast } from "../../api/ApiService";

export const useGetBulkWeather = () => {
  const { data, isLoading } = useQuery(["weather"], getBulkWeatherForecast);

  return { data, isLoading };
};
