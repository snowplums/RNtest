import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../pages/HomeScreen";
import UserScreen from "../pages/UserScreen";
import UserSettings from "../pages/UserSettings";
import PracticeScreen from "../pages/PracticeScreen";
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
      <Bar.Screen name="Home" component={HomeNavigator} />
      <Bar.Screen name="Lessons" component={LessonNavigator} />
      <Bar.Screen name="Practice" component={PracticeNavigator} />
      <Bar.Screen name="Settings" component={UserSettings} />
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
      <Stack.Screen name="PracticePage" component={PracticeScreen} />
    </Stack.Navigator>
  );
};

const LessonNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        //headerShown: false,
        headerBackTitleVisible: false,
      }}
      initialRouteName="LessonPage"
    >
      <Stack.Screen name="LessonPage" component={LessonPage} />
      <Stack.Screen name="PraticePage" component={PracticeScreen} />
    </Stack.Navigator>
  );
};

const PracticeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        //headerShown: false,
        headerBackTitleVisible: false,
      }}
      initialRouteName="PracticePage"
    >
      <Stack.Screen name="PracticePage" component={PracticeScreen} />
      <Stack.Screen name="HomePage" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
