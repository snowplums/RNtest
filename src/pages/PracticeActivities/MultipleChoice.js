import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  Pressable,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { MultipleChoiceData } from "../../data/MultipleChoiceData";
var problemSet;

var questionNum = 0;
const MultipleChoice = () => {
  const [MCQstate, setMCQstate] = useState(0);

  const renderProblemSet = ({ item }) => {
    return (
      <View>
        <TouchableOpacity onPress={() => onPressProblemset(item)}>
          <Text>{item.description}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const onPressProblemset = (item) => {
    setMCQstate(MultipleChoiceData[item.activityId].questions[questionNum]);
    problemSet = item.activityId;
  };

  if (MCQstate === 0) {
    return (
      <View>
        <FlatList
          data={MultipleChoiceData}
          renderItem={renderProblemSet}
          keyExtractor={(item) => `${item.activityId}`}
        />
      </View>
    );
  } else {
    return (
      <View>
        <ProblemDisplay
          choices={MCQstate.choices}
          question={MCQstate.question}
          answer={MCQstate.answer}
        />
      </View>
    );
  }
};

export const ProblemDisplay = (props) => {
  const [questionChoices, setQuestionChoices] = useState(props.choices);
  const [question, setQuestion] = useState(props.question);
  const [answer, setAnswer] = useState(props.answer);

  var incorrect = 0;
  const checkAnswer = (choice) => {
    if (choice === answer) {
      correctAnswer();
    } else {
      incorrectAnswer();
    }
  };

  const correctAnswer = () => {
    //console.log("correct");
    alert("Correct!");
    setTimeout(nextQuestion, 1000);
  };

  const incorrectAnswer = () => {
    //console.log("incorrect");
    if (incorrect >= 2) {
      alert("Incorrect! The correct answer is " + answer);
      setTimeout(nextQuestion, 1000);
    } else {
      incorrect++;
      alert("Incorrect! Try again!");
    }
  };

  const nextQuestion = () => {
    //console.log("next question");

    if (questionNum >= MultipleChoiceData[problemSet].questions.length - 1) {
      alert("You have completed the problem set!");
      questionNum = 0;
      return;
    }
    questionNum++;

    setQuestionChoices(
      MultipleChoiceData[problemSet].questions[questionNum].choices
    );
    setQuestion(MultipleChoiceData[problemSet].questions[questionNum].question);
    setAnswer(MultipleChoiceData[problemSet].questions[questionNum].answer);
  };

  return (
    <View>
      <Text>{question}</Text>
      {questionChoices.map((choice) => {
        return (
          <Button
            title={choice}
            onPress={() => checkAnswer(choice)}
            key={choice}
          />
        );
      })}
      <Button title="next question" onPress={() => nextQuestion()} />
    </View>
  );
};

export default MultipleChoice;
