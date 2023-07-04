import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Home from "../screens/home";
import ReviewDetails from "../screens/review-details";

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: "" }}
      />
      <Stack.Screen
        name="Review"
        component={ReviewDetails}
        options={{ headerTitle: "" }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  navi: {
    background: "red",
  },
});
