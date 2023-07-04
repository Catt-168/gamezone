import { createDrawerNavigator } from "@react-navigation/drawer";
import Header from "../shared/header";
import AboutStack from "./aboutStack";
import Navigator from "./stack";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Navigator}
        options={{ headerTitle: () => <Header /> }}
      />
      <Drawer.Screen
        name="About"
        component={AboutStack}
        options={{ headerTitle: () => <Header /> }}
      />
    </Drawer.Navigator>
  );
}
