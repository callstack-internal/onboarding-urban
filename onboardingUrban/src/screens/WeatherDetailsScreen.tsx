import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import { CityTileComponent } from "../components/CityTileComponent";
import { DetailsSectionComponent } from "../components/DetailsSectionComponent";
import { RootStackParamList } from "../navigators/MainNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;
export const WeatherDetailsScreen = ({ route }: Props) => {
  const { weather } = route.params;
  return (
    <View style={styles.container}>
      <CityTileComponent
        cityName={weather.name}
        iconSignature={weather.weather[0].icon}
        temperature={weather.main.temp}
        weatherStatus={weather.weather[0].description}
      />
      <DetailsSectionComponent
        title="Humidity"
        value={`${weather.main.humidity}%`}
      />
      <DetailsSectionComponent
        title="Pressure"
        value={`${weather.main.pressure} hPa`}
      />
      <DetailsSectionComponent
        title="Wind Speed"
        value={`${weather.wind.speed} mph`}
      />
      <DetailsSectionComponent
        title="Cloud Cover"
        value={`${weather.clouds.all}%`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
});
