import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import { GetWeatherResponse } from "../src/common/types/Weather";
import { HomeScreen } from "../src/screens/HomeScreen";
import { useGetBulkWeather } from "../src/common/hooks/useGetBulkWeather";

jest.mock("../src/common/hooks/useGetBulkWeather");
const mockCities: GetWeatherResponse = {
  cnt: 2,
  list: [
    {
      coord: {
        lon: 2.3488,
        lat: 48.8534,
      },
      sys: {
        country: "FR",
        timezone: 3600,
        sunrise: 1667890099,
        sunset: 1667924425,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      main: {
        temp: 10.75,
        feels_like: 9.97,
        temp_min: 9.65,
        temp_max: 11.96,
        pressure: 1007,
        humidity: 80,
      },
      visibility: 10000,
      wind: {
        speed: 6.17,
        deg: 170,
      },
      clouds: {
        all: 0,
      },
      dt: 1667891363,
      id: 2988507,
      name: "Paris",
    },
    {
      coord: {
        lon: -3.7026,
        lat: 40.4165,
      },
      sys: {
        country: "ES",
        timezone: 3600,
        sunrise: 1667890352,
        sunset: 1667927077,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      main: {
        temp: 10.33,
        feels_like: 9.46,
        temp_min: 7.53,
        temp_max: 12.31,
        pressure: 1018,
        humidity: 78,
      },
      visibility: 10000,
      wind: {
        speed: 1.03,
        deg: 0,
      },
      clouds: {
        all: 75,
      },
      dt: 1667891362,
      id: 3117735,
      name: "Madrid",
    },
  ],
};

describe("test HomeScreen", () => {
  // let nav: NativeStackNavigationProp<RootStackParamList, "Home", undefined>;
  // let route: RouteProp<RootStackParamList, "Home">;

  let _props: any;
  let navigateFn = jest.fn();

  const createTestProps = (props: Object) => ({
    navigation: {
      navigate: navigateFn,
    },
    ...props,
  });

  beforeEach(() => {
    _props = createTestProps({});
  });

  test("Displays a list of cities", () => {
    (useGetBulkWeather as jest.Mock).mockReturnValueOnce({
      data: mockCities,
      isLoading: false,
    });

    render(<HomeScreen {..._props} />);

    const renderedCities = screen.getAllByAccessibilityHint("city weather");
    expect(renderedCities.length).toBe(2);
  });

  test("Displays activity indicator when loading", () => {
    (useGetBulkWeather as jest.Mock).mockReturnValueOnce({
      isLoading: true,
    });

    render(<HomeScreen {..._props} />);

    expect(screen.getByAccessibilityHint("loading")).toBeTruthy();
  });

  test("Calls navigate on city press", () => {
    (useGetBulkWeather as jest.Mock).mockReturnValueOnce({
      data: mockCities,
      isLoading: false,
    });

    render(<HomeScreen {..._props} />);

    const renderedCities = screen.getAllByAccessibilityHint("city weather");

    fireEvent.press(renderedCities[0]);
    expect(navigateFn).toHaveBeenCalled();
  });
});
