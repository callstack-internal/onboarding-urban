import { useQuery } from "@tanstack/react-query";
import { getBulkWeatherForecast } from "../../api/ApiService";

export const useGetBulkWeather = () => {
  const { data } = useQuery({
    queryKey: ["weather"],
    queryFn: getBulkWeatherForecast,
  });

  return { data };
};
