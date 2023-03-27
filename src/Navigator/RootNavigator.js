import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

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
      <Stack.Screen name="PracticePage" component={PracticeScreen} />
      <Stack.Screen name="Navbar" component={Navbar} />
      <Stack.Screen name="Lesson" component={LessonPage} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
