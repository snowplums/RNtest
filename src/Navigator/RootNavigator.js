import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../pages/HomeScreen";
import UserScreen from "../pages/UserScreen";
import UserSettings from "../pages/UserSettings";
import PracticeScreen from "../pages/PracticeScreen";
import Navbar from "../components/Navbar";

const Stack = createStackNavigator();
const Bar = createBottomTabNavigator();

const getHeaderTitle = (route) => {
  const routeName = route.state;
};

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerBackTitleVisible: false,
      }}
      initialRouteName="Navbar"
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="UserScreen" component={UserScreen} />
      <Stack.Screen name="Practice" component={PracticeScreen} />
      <Stack.Screen name="Navbar" component={Navbar} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
