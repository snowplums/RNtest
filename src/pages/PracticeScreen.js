import React from "react";

import { View, Text, Image, Button, StyleSheet, Pressable } from "react-native";

import data from "../data/Practice.json";

const MyImage = require("../images/temp.png");

const PracticeScreen = ({ navigation }) => {
  return (
    <View>
      {data.map((activity) => (
        <Cell
          title={activity.title}
          image={activity.image}
          key={activity.title}
        />
      ))}
    </View>
  );
};

export default PracticeScreen;

<<<<<<< Updated upstream
const Cell = (props) => {
  return (
    <Pressable onPress={}>
      <Text>{props.title}</Text>
      <Image style={cellStyle} source={props.image} size={100} color="red" />
    </Pressable>
  );
};







=======
>>>>>>> Stashed changes
const pageStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8fcbbc",
  },
});

const cellStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "8fcbbc",
  },
});
