import { useQuery } from "@tanstack/react-query";
import { getBulkWeatherForecast } from "../../api/ApiService";

export const useGetBulkWeather = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["weather"],
    queryFn: getBulkWeatherForecast,
  });

  return { data, isLoading };
};
