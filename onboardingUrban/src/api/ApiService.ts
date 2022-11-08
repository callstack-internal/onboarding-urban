import { create } from "apisauce";
import { API_KEY, API_URL, CITIES_LIST } from "../common/constants";
import { GetWeatherResponse } from "../common/types/Weather";

const api = create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const getBulkWeatherForecast = async (): Promise<
  GetWeatherResponse | undefined
> => {
  const queryParams = new URLSearchParams({
    id: CITIES_LIST.join(","),
    units: "metric",
    appid: API_KEY,
  });

  const response = await api.get<GetWeatherResponse>(
    "/data/2.5/group",
    queryParams
  );

  return response.data;
};
