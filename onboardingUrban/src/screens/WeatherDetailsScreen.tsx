import React from "react";
import { StyleSheet, View } from "react-native";
import { CityTileComponent } from "../components/CityTileComponent";
import { DetailsSectionComponent } from "../components/DetailsSectionComponent";

export const WeatherDetailsScreen = ({ route, navigation }) => {
  const { cityId } = route.params;
  return (
    <View style={styles.container}>
      <CityTileComponent cityName={cityId} />
      <DetailsSectionComponent title="Humidity" value="87%" />
      <DetailsSectionComponent title="Pressure" value="1018 hPa" />
      <DetailsSectionComponent title="Wind Speed" value="3.36 mph" />
      <DetailsSectionComponent title="Cloud Cover" value="0%" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
});
