import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Card from "../shared/card";
import { globalImages, globalStyles } from "../styles/global";

export default function ReviewDetails({ navigation, route }) {
  const { item } = route.params;
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{item.title}</Text>
        <Text>{item.body}</Text>
        <View style={styles.rating}>
          <Text>GameZone Rating: </Text>
          <Image source={globalImages.rating[item.rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
