import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

interface SectionProps {
  title: string;
  value: string;
}
export const DetailsSectionComponent: FC<SectionProps> = ({ title, value }) => {
  return (
    <View style={styles.detailsSectionContainer}>
      <Text
        accessibilityHint="details section title"
        style={styles.sectionTitle}
      >
        {title}
      </Text>
      <Text
        accessibilityHint="details section value"
        style={styles.sectionValue}
      >
        {value}
      </Text>
    </View>
  );
};

const grey = "grey";
const dividerGrey = "rgb(214, 214, 214)";
const styles = StyleSheet.create({
  detailsSectionContainer: {
    borderBottomWidth: 1,
    borderColor: dividerGrey,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingRight: 15,
    paddingLeft: 20,
  },
  sectionTitle: {
    fontSize: 15,
  },
  sectionValue: {
    fontSize: 13,
    color: grey,
  },
});
