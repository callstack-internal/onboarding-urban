import React, { FC } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

interface CityTileProps {
  cityName: string;
  weatherStatus: string;
  temperature: number;
  iconSignature: string;
  onPress?: () => void;
}

export const CityTileComponent: FC<CityTileProps> = ({
  cityName,
  onPress,
  weatherStatus,
  temperature,
  iconSignature,
}) => {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={styles.listItemContainer}
    >
      <View style={styles.leftSectionContainer}>
        <View>
          <Image
            source={{
              uri: `https://openweathermap.org/img/wn/${iconSignature}@2x.png`,
            }}
            accessibilityIgnoresInvertColors
            style={styles.weatherIcon}
          />
        </View>
        <View style={styles.cityNameAndStatusContainer}>
          <Text style={styles.cityNameLabel}>{cityName}</Text>
          <Text style={styles.weatherStatusLabel}>{weatherStatus}</Text>
        </View>
      </View>
      <View style={styles.rightSectionContainer}>
        <View style={styles.temperatureLabelContainer}>
          <Text style={styles.temperatureText}>{temperature}</Text>
          <Text style={styles.temperatureUnitText}>°C</Text>
        </View>
        {onPress && (
          <Icon
            name="chevron-thin-right"
            size={25}
            color={grey}
            style={styles.goToDetailsIcon}
          />
        )}
      </View>
    </Pressable>
  );
};

const babyBlue = "rgb(171,219,227)";
const grey = "grey";
const white = "rgb(255,255,255)";
const dividerGrey = "rgb(214, 214, 214)";

const styles = StyleSheet.create({
  listItemContainer: {
    padding: 10,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: dividerGrey,
    justifyContent: "space-between",
    alignItems: "center",
  },
  temperatureLabelContainer: {
    backgroundColor: babyBlue,
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 20,
    flexDirection: "row",
    color: white,
  },
  goToDetailsIcon: { marginLeft: 10 },
  leftSectionContainer: { flexDirection: "row", alignItems: "center" },
  cityNameLabel: { fontWeight: "500", fontSize: 18 },
  weatherStatusLabel: { fontWeight: "300" },
  cityNameAndStatusContainer: { flexDirection: "column", marginLeft: 15 },
  temperatureText: { color: white, fontSize: 18, fontWeight: "500" },
  temperatureUnitText: {
    marginLeft: 5,
    color: white,
    fontSize: 18,
    fontWeight: "500",
  },
  weatherIcon: { width: 60, height: 60 },
  rightSectionContainer: { flexDirection: "row", alignItems: "center" },
});
