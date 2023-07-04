import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import DrawerNavigator from "./routes/drawer";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
