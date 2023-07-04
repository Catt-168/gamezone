import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "../screens/about";
import Header from "../shared/header";

const Stack = createNativeStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="about"
        component={About}
        options={{ headerTitle: "" }}
      />
    </Stack.Navigator>
  );
}
