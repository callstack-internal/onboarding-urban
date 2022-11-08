import React from "react";
import { Text, View } from "react-native";

export const WeatherDetailsScreen = ({ route, navigation }) => {
  const { cityId } = route.params;
  return (
    <View>
      <Text>City Id: {cityId}</Text>
    </View>
  );
};
