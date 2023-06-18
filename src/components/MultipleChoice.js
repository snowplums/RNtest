import React from "react";

import { View, Text, Image, Button, StyleSheet, Pressable } from "react-native";

const MultipleChoice = (props) => {

  var incorrect = 0;

  const checkAnswer = (choice) => {
    if (choice === props.answer) {
      correctAnswer();
    } else {
      incorrectAnswer();
    }
  };

  const correctAnswer = () => {
    
  };

  const incorrectAnswer = () => {
    if(incorrect >= 2){
      
    }
  };

  const revealAnswer = () => {

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
