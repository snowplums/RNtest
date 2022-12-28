import React from "react";

import { View, Text, Button, StyleSheet } from "react-native";

const UserSettings = ({ navigation }) => {
  return (
    <View>
      <Text>User Settings</Text>
    </View>
  );
};

export default UserSettings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8fcbbc",
  },
});
