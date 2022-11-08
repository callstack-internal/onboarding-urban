import React from "react";
import { FlatList, SafeAreaView, StatusBar } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { CITIES_LIST } from "../common/constants";
import { CityTileComponent } from "../components/CityTileComponent";

export const HomeScreen = ({ navigation }) => {
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  const onItemPress = (cityId: string) => {
    navigation.navigate("Details", { cityId });
  };

  const renderItem = ({ item }) => {
    return (
      <CityTileComponent cityName={item} onPress={() => onItemPress(item)} />
    );
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <FlatList data={CITIES_LIST} renderItem={renderItem} />
    </SafeAreaView>
  );
};
