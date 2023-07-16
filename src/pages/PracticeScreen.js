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

  const renderPractice = ({ item }) => {
    return (
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onPressPractice(item)}
        >
          <Text style={styles.Text}>{item.title}</Text>
          {item.image}
        </TouchableOpacity>
      </View>
    );
  };

  const onPressPractice = (practice) => {
    navigation.navigate(practice.route);
    //<MultipleChoice answer="ans" choices={["wrong", "ans", "wron", "false"]}/>
  };

  return (
    <View>
      <View style={{ justifyContent: "center", height: "100%" }}>
        <View
          style={{
            position: "absolute",
            height: 900,
            width: 900,
            backgroundColor: "#FFCC99",
            alignSelf: "center",
            borderRadius: 450,
          }}
        ></View>
        <View
          style={{
            position: "absolute",
            height: 600,
            width: 600,
            backgroundColor: "#FFEE99",
            alignSelf: "center",
            borderRadius: 300,
          }}
        ></View>
        <View
          style={{
            position: "absolute",
            height: 300,
            width: 300,
            backgroundColor: "#FFCC99",
            alignSelf: "center",
            borderRadius: 150,
          }}
        ></View>
      </View>
      <View style={{ height: "100%", width: "100%", position: "absolute" }}>
        <View
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            borderColor: "darkred",
            borderWidth: 5,
            zIndex: 1,
          }}
          pointerEvents="none"
        ></View>
        <View
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            borderColor: "darkred",
            borderWidth: 5,
            borderRadius: 20,
            zIndex: 1,
          }}
          pointerEvents="none"
        ></View>
        <FlatList
          data={Practice}
          renderItem={renderPractice}
          keyExtractor={(item) => `${item.activityId}`}
        />
      </View>
    </View>
  );
  /*


  return (
    <MultipleChoice answer="ans" choices={["wrong", "ans", "wron", "false"]}/>
  )
  */
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

const styles = StyleSheet.create({
  Text: {
    fontSize: 30,
    fontWeight: "700",
    color: "red",
    textAlign: "center",
  },
  button: {
    paddingHorizontal: 6,
    paddingVertical: 10,
    borderWidth: 10,
    borderRadius: 40,
    borderColor: "red",
    backgroundColor: "gold",
    marginHorizontal: "5%",
    marginVertical: "5%",
  },
  Img: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
});
