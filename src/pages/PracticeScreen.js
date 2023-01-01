import React from "react";

import { View, Text, Image, Button, StyleSheet } from "react-native";

import data from "../data/Practice.json";

const MyImage = require('../images/temp.png');

const PracticeScreen = ({ navigation }) => {
  return (
    <View>
      {data.map((activity) => (
        <>
       <Text>{activity.title}</Text> 
       <Image source={activity.image} />
       </>
        
     ))}
      </ View>
  );
};

export default PracticeScreen;


const Cell = (props) => {
  return(
    <>
    <Text>{props.title}</Text>
    <Image style={cellStyle} source={props.image} size={100} color="red" />
        </>
    );
};



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
    backgroundColor: "8fcbbc"
  }
})

