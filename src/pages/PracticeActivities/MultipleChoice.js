import React from "react";
import { useState } from "react";
import { View, Text, Image, Button, StyleSheet, Pressable } from "react-native";

import { MultipleChoiceData } from "../../data/MultipleChoiceData";
var problemSet = 2;

var questionNum = 0;
const MultipleChoice = () => {

  

 
  return (
    problemDisplay(MultipleChoiceData[problemSet].questions[questionNum])
  );
};

const problemDisplay = (problem) => {
  const [questionChoices, setQuestionChoices] = useState(problem.choices);
  const [question, setQuestion] = useState(problem.question);
  
  var incorrect = 0;
  console.log(questionNum);
  const checkAnswer = (choice) => {
    if (choice === problem.answer) {
      correctAnswer();
    } else {
      incorrectAnswer();
    }
  };

  const correctAnswer = () => {
      console.log("correct");
      alert("Correct!");
      setTimeout(nextQuestion, 1000)
  };

  const incorrectAnswer = () => {
    console.log("incorrect");
    if(incorrect >= 2){
      alert("Incorrect! The correct answer is " + problem.answer);
      setTimeout(nextQuestion, 1000)
    }else{
      incorrect++;
      alert("Incorrect! Try again!");
    }
  };


  const nextQuestion = () => {
    console.log("next question");

    if(questionNum >= MultipleChoiceData[problemSet].questions.length - 1){
      alert("You have completed the problem set!");
      return;
    }
    questionNum++;
    
    setQuestionChoices(MultipleChoiceData[problemSet].questions[questionNum].choices);
    setQuestion(MultipleChoiceData[problemSet].questions[questionNum].question);
  };
  return (
    
    <View>
      <Text>{question}</Text>
      {
        questionChoices.map((choice) => {
          
        return(
          <Button title={choice} onPress={()=>checkAnswer(choice)} key={choice}/>
        )
        })
      }
      <Button title="next question" onPress={()=>nextQuestion()}/>
    </View>
  );
  
    
}

export default MultipleChoice;
