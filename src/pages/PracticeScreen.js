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
import { TouchableOpacity } from "react-native-gesture-handler";

const MyImage = require("../images/temp.png");

const PracticeScreen = (props) => {
  const { navigation, route } = props;
  

  
  const renderPractice = ({ item} ) => {
    return (
      <View>
      <TouchableOpacity onPress={onPressPractice(item)}>
        <Text>{item.title}</Text>
        <Image source={MyImage} />
      </TouchableOpacity>
      </View>
    );
  };

  const onPressPractice = (practice) => {
    navigation.navigate(practice.route);
  }

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
