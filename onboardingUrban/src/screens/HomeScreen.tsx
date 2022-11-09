import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";
import { useGetBulkWeather } from "../common/hooks/useGetBulkWeather";
import { Weather } from "../common/types/Weather";
import { CityTileComponent } from "../components/CityTileComponent";
import { RootStackParamList } from "../navigators/MainNavigator";
type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export const HomeScreen = ({ navigation }: Props) => {
  const { data, isLoading } = useGetBulkWeather();

  const backgroundStyle = {
    backgroundColor: "rgb(255, 255, 255)",
    flex: 1,
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

      {isLoading ? (
        <ActivityIndicator size={"large"} style={styles.loading} />
      ) : (
        <FlatList data={data?.list ?? []} renderItem={renderItem} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loading: { position: "absolute", left: 0, top: 0, bottom: 0, right: 0 },
});
