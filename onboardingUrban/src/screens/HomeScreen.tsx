import React from "react";
import {
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  StatusBar,
} from "react-native";
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

  const renderItem = ({ item }: ListRenderItemInfo<number>) => {
    return (
      <CityTileComponent
        cityName={item.toString()}
        onPress={() => onItemPress(item.toString())}
      />
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
