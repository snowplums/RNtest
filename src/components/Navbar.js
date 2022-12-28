import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
const Bar = createBottomTabNavigator();

import HomeScreen from "../pages/HomeScreen";
import UserScreen from "../pages/UserScreen";
import UserSettings from "../pages/UserSettings";
import PracticeScreen from "../pages/PracticeScreen";

const Navbar = () => {
  
    <Bar.Navigator>
      <Bar.Screen name="HomeScreen" component={HomeScreen} />
      <Bar.Screen name="UserScreen" component={UserScreen} />
      <Bar.Screen name="Practice" component={PracticeScreen} />
      <Bar.Screen name="UserSettings" component={UserSettings} />
    </Bar.Navigator>
  
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    shadowColor: "#e3e3e3",
    shadowOpacity: 0.9,
  },
  barText: {
    color: "white",
  },
});

export default Navbar;
