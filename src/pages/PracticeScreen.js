import React from "react";

import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  Pressable,
  FlatList,
} from "react-native";

import { Practice } from "../data/Practice.js";

const MyImage = require("../images/temp.png");

const PracticeScreen = (props) => {
  const { navigation, route } = props;
  const onPressPractice = (practice) => {
    navigation.navigate("PracticePage", { practice });
  };

  //Create a render function for the FlatList
  const renderPractice = ({ item }) => {
    return (
      <Pressable onPress={() => onPressPractice(item)}>
        <View>
          <Text>{item.title}</Text>
          <Image source={item.image} alt="MyImage" />
        </View>
      </Pressable>
    );
  };

  return (
    <View>
      <FlatList
        data={Practice}
        renderItem={renderPractice}
        keyExtractor={(item) => `${item.activityId}`}
      />
    </View>
  );
};

export default PracticeScreen;

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
