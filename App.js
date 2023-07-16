import React from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { DefaultTheme } from "@react-navigation/native";
import RootNavigator from "./src/Navigator/RootNavigator";

export default function App() {
  return (
    <NavigationContainer theme={theme} backgroundColor={"red"}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(255, 45, 85)",
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
