import React from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { CITIES_LIST } from "../common/constants";
import { CityItem } from "../components/CityListItem";

export const HomeScreen = ({ navigation }) => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onItemPress = (cityId: string) => {
    navigation.navigate("Details", { cityId });
  };

  const renderItem = ({ item }) => {
    return <CityItem cityName={item} onPress={() => onItemPress(item)} />;
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <FlatList data={CITIES_LIST} renderItem={renderItem} />
    </SafeAreaView>
  );
};
