import React from "react";
//import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, Button, StyleSheet } from "react-native";

import LessonPage from "./LessonPage";

const HomeScreen = ({ navigation }) => {
  const { nav } = this.props.navigation;

  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="View Lessons" onPress={() => navigate("LessonPage")} />
    </View>
  );
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
