import React from "react";

import { View, Text, Image, Button, StyleSheet, Pressable } from "react-native";

const MultipleChoice = (props) => {

  const checkAnswer = (choice) => {
    if (choice === props.answer) {
      console.log("Right Answer");
    } else {
      console.log("Wrong Answer");
    }
  };

  return (
    <View>
      <Text>Multiple Choice</Text>
      {
        props.choices.map((choice) => {
        return(
          <Button title={choice} onPress={checkAnswer.bind(this, choice)} key={choice}/>
        )
        })
      }
        
      
    </View>
  );
};

export default MultipleChoice;
