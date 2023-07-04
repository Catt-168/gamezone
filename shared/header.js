import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

export default function Header() {
  const openMenu = () => {};
  return (
    <ImageBackground
      source={require("../assets/game_bg.png")}
      style={styles.header}
    >
      <View style={styles.container}>
        <Image
          source={require("../assets/heart_logo.png")}
          style={styles.headerImage}
        />
        <Text style={styles.text}>Game Zone</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontFamily: "sans-serif",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: 16,
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
  container: {
    flexDirection: "row",
  },
});
