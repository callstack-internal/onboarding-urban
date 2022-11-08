import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useGetBulkWeather } from "../common/hooks/useGetBulkWeather";
import { Weather } from "../common/types/Weather";
import { CityTileComponent } from "../components/CityTileComponent";
import { RootStackParamList } from "../navigators/MainNavigator";
type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export const HomeScreen = ({ navigation }: Props) => {
  const { data } = useGetBulkWeather();

  const backgroundStyle = {
    backgroundColor: "rgb(255, 255, 255)",
  };

  const onItemPress = (weather: Weather) => {
    navigation.navigate("Details", { weather });
  };

  const renderItem = ({ item }: ListRenderItemInfo<Weather>) => {
    return (
      <CityTileComponent
        cityName={item.name}
        weatherStatus={item.weather[0].description}
        temperature={item.main.temp}
        iconSignature={item.weather[0].icon}
        onPress={() => onItemPress(item)}
      />
    );
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <FlatList data={data?.list ?? []} renderItem={renderItem} />
    </SafeAreaView>
  );
};
