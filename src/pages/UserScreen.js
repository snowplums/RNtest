import React from "react";

import { View, Text, Button, StyleSheet } from "react-native";

const UserScreen = ({ navigation }) => {
  return (
    <View>
      <Text>User Screen</Text>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8fcbbc",
  },
});
