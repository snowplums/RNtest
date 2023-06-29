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
      <TouchableOpacity style={styles.button} onPress={onPressPractice(item)}>
        <Text style={styles.Txt}>{item.title}</Text>
        <Image source={MyImage} style={styles.Img}/>
      </TouchableOpacity>
      </View>
    );
  };

  const onPressPractice = (practice) => {
    navigation.navigate(practice.route);
    //<MultipleChoice answer="ans" choices={["wrong", "ans", "wron", "false"]}/>
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


  return (
    <MultipleChoice answer="ans" choices={["wrong", "ans", "wron", "false"]}/>
  )
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
  Txt: {
    fontSize: 60,
    fontWeight: "700",
    color: "magenta",
    textAlign: 'center'
  },
  button: {
    paddingHorizontal: 6,
    paddingVertical: 10,
    borderWidth: 10,
    borderRadius: 40,
    borderColor: 'red',
    backgroundColor: 'gold',
    marginHorizontal: '5%',
    marginVertical: '5%'
  },
  Img: {
    width: 100,
    height: 100,
    alignSelf: 'center'
  }
})
