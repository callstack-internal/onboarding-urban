import React, { FC } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

interface CityItemProps {
  cityName: string;
  onPress: () => void;
}

export const CityItem: FC<CityItemProps> = ({ cityName, onPress }) => {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={() => onPress()}
      style={styles.listItemContainer}
    >
      <View style={styles.cityDescriptionContainer}>
        <View>
          <Text>ICON</Text>
        </View>
        <View style={styles.cityNameAndStatusContainer}>
          <Text>{cityName}</Text>
          <Text>Weather status</Text>
        </View>
      </View>
      <View style={styles.temperatureLabelContainer}>
        <Text style={styles.temperatureText}>39</Text>
        <Text style={styles.temperatureUnitText}>°C</Text>
      </View>
    </Pressable>
  );
};

const babyBlue = "rgb(171,219,227)";
const grey = "grey";
const white = "rgb(255,255,255)";

const styles = StyleSheet.create({
  listItemContainer: {
    padding: 10,
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: grey,
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
  cityDescriptionContainer: { flexDirection: "row", alignItems: "center" },
  cityNameAndStatusContainer: { flexDirection: "column", marginLeft: 15 },
  temperatureText: { color: white },
  temperatureUnitText: { marginLeft: 5, color: white },
});
