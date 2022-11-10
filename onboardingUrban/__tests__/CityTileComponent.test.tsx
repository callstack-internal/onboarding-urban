import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import { CityTileComponent } from "../src/components/CityTileComponent";

test("Displays all passed data", () => {
  const city = "city";
  const icon = "icon";
  const temp = 30;
  const status = "windy";

  render(
    <CityTileComponent
      cityName={city}
      iconSignature={icon}
      temperature={temp}
      weatherStatus={status}
    />
  );

  const temperature = screen.getByAccessibilityHint("temperature");
  const weatherIcon = screen.getByAccessibilityHint("weather icon");
  const cityName = screen.getByAccessibilityHint("city name");
  const weatherStatus = screen.getByAccessibilityHint("weather status");

  expect(temperature).toBeTruthy();
  expect(weatherIcon).toBeTruthy();
  expect(cityName).toBeTruthy();
  expect(weatherStatus).toBeTruthy();
});

test("Tile is pressable", () => {
  const mockfn = jest.fn();

  render(
    <CityTileComponent
      cityName={""}
      iconSignature={""}
      temperature={0}
      weatherStatus={""}
      onPress={mockfn}
    />
  );

  fireEvent.press(screen.getByRole("button"));
  expect(mockfn).toHaveBeenCalled();
});

test("Tile is not pressable", () => {
  const mockfn = jest.fn();

  render(
    <CityTileComponent
      cityName={""}
      iconSignature={""}
      temperature={0}
      weatherStatus={""}
    />
  );

  fireEvent.press(screen.getByRole("button"));
  expect(mockfn).not.toHaveBeenCalled();
});
