import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../pages/HomeScreen";
import UserScreen from "../pages/UserScreen";
import UserSettings from "../pages/UserSettings";
import PracticeScreen from "../pages/PracticeScreen";
import LessonScreen from "../pages/LessonScreen";
import LessonPage from "../pages/LessonPage";

import MultipleChoice from "../pages/PracticeActivities/MultipleChoice";
import SentenceScrambler from "../pages/PracticeActivities/SentenceScrambler";

const Stack = createStackNavigator();

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
      initialRouteName="Home"
    >
      <Bar.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Image
                source={require("../../assets/icons/home1.png")}
                style={{
                  width: size,
                  height: size,
                  borderRadius: size,
                  tintColor: color,
                }}
              />
            );
          },
        }}
      />
      <Bar.Screen
        name="Lessons"
        component={LessonNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Image
                source={require("../../assets/icons/lesson1.png")}
                style={{
                  width: size,
                  height: size,
                  borderRadius: size,
                  tintColor: color,
                }}
              />
            );
          },
        }}
      />
      <Bar.Screen
        name="Practice"
        component={PracticeNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Image
                source={require("../../assets/icons/activity1.png")}
                style={{
                  width: size,
                  height: size,
                  borderRadius: size,
                  tintColor: color,
                }}
              />
            );
          },
        }}
      />
      <Bar.Screen
        name="Settings"
        component={UserNavigator}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Image
                source={require("../../assets/icons/settings1.png")}
                style={{
                  width: size,
                  height: size,
                  borderRadius: size,
                  tintColor: color,
                }}
              />
            );
          },
        }}
      />
    </Bar.Navigator>
  );
};

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        //headerShown: false,
        title: "Home",
        headerBackTitleVisible: false,
      }}
      initialRouteName="HomeScreen"
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="LessonScreen" component={LessonScreen} />
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
        title: "Lessons",
      }}
      initialRouteName="LessonScreen"
    >
      <Stack.Screen name="LessonScreen" component={LessonScreen} />
      <Stack.Screen name="LessonPage" component={LessonPage} />
    </Stack.Navigator>
  );
};

const PracticeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        //headerShown: false,
        title: "Practice Activities",
        headerBackTitleVisible: false,
      }}
      initialRouteName="PracticePage"
    >
      <Stack.Screen name="PracticePage" component={PracticeScreen} />
      <Stack.Screen name="HomePage" component={HomeScreen} />
      <Stack.Screen name="MultipleChoice" component={MultipleChoice} />
      <Stack.Screen name="SentenceScrambler" component={SentenceScrambler} />
    </Stack.Navigator>
  );
};

const UserNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        //headerShown: false,
        title: "Settings",
        headerBackTitleVisible: false,
      }}
      initialRouteName="UserScreen"
    >
      <Stack.Screen name="UserScreen" component={UserScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
