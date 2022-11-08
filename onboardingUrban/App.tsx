import React from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import { CITIES_LIST } from "./src/common/constants";
import { CityItem } from "./src/components/CityListItem";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const renderItem = ({ item }) => {
    return <CityItem cityName={item} />;
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

export default App;
