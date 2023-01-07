import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LessonPage from "./LessonPage";
const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="HomeView"
      screenOptions={{
        headerBackTitleVisible: false,
        cardStyle: { backgroundColor: "#FFFFFF" },
        cardShadowEnabled: false,
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeView" component={HomeView} />
      <Stack.Screen name="LessonPage" component={LessonPage} />
    </Stack.Navigator>
  );
};

const HomeView = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="View List"
        onPress={() => navigation.navigate("LessonPage")}
      />
      <Button
        title="View List"
        onPress={() => navigation.navigate("LessonPage")}
      />
    </View>
  );
};

const LastLesson = () => {
  return <></>;
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8fcbbc",
  },
});
