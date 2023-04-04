import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../pages/HomeScreen";
import UserScreen from "../pages/UserScreen";
import UserSettings from "../pages/UserSettings";
import PracticeScreen from "../pages/PracticeScreen";
import Navbar from "../components/Navbar";
import LessonPage from "../pages/LessonPage";

const Stack = createStackNavigator();

const getHeaderTitle = (route) => {
  const routeName = route.state;
};

const Bar = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <Bar.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        cardStyle: { backgroundColor: "#FFFFFF" },
        cardShadowEnabled: false,
        headerShown: false,
      }}
      initialRouteName="HomeScreen"
    >
      <Bar.Screen name="HomeScreen" component={HomeNavigator} />
      <Bar.Screen name="UserScreen" component={UserScreen} />
      <Bar.Screen name="Practice" component={PracticeScreen} />
      <Bar.Screen name="UserSettings" component={UserSettings} />
    </Bar.Navigator>
  );
};

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        //headerShown: false,
        headerBackTitleVisible: false,
      }}
      initialRouteName="HomeScreen"
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="LessonPage" component={LessonPage} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
