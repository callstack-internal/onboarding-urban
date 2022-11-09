import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { WeatherDetailsScreen } from "../screens/WeatherDetailsScreen";
import { Weather } from "../common/types/Weather";

export type RootStackParamList = {
  Home: undefined;
  Details: { weather: Weather };
};
const Stack = createNativeStackNavigator<RootStackParamList>();
const CommonScreenOptions = {
  headerTintColor: "rgb(0, 0, 0)",
  headerStyle: {
    backgroundColor: "rgb(227, 227, 227)",
  },
};
export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Weather",
            ...CommonScreenOptions,
          }}
        />
        <Stack.Screen
          name="Details"
          component={WeatherDetailsScreen}
          options={{ title: "Details", ...CommonScreenOptions }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
