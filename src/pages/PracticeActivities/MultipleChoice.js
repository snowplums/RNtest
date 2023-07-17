import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
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
    if (item.description === "Multiple Choice") {
      return (
        <Text style={styles.Title}>
            Multiple Choice
        </Text>
      )
    } else {
      return (
        <View>
          <TouchableOpacity onPress={() => onPressProblemset(item)} style={styles.Button}>
            <Text style={styles.ButtonTxt}>{item.description}</Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  const onPressProblemset = (item) => {
    if (questionNum == -1) {
      questionNum = 0;
    }
    setMCQstate(MultipleChoiceData[item.activityId + 1].questions[questionNum]); //+1 because I made the title the first datum yikes
    problemSet = item.activityId + 1; // likewise
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
  }else{  
    return(
      <View>
        <View style={{ justifyContent: "center", height: "100%" }}>
          <View
            style={{
              position: "absolute",
              height: 900,
              width: 900,
              backgroundColor: "#EEEE77",
              alignSelf: "center",
              borderRadius: 450,
            }}
          ></View>
          <View
            style={{
              position: "absolute",
              height: 600,
              width: 600,
              backgroundColor: "#EEEE95",
              alignSelf: "center",
              borderRadius: 300,
            }}
          ></View>
          <View
            style={{
              position: "absolute",
              height: 300,
              width: 300,
              backgroundColor: "#EEEE77",
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
              borderWidth: 6,
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
              borderWidth: 6,
              borderRadius: 20,
              zIndex: 1,
            }}
            pointerEvents="none"
          ></View>
          <FlatList
            data={MultipleChoiceData}
            renderItem={renderProblemSet}
            keyExtractor={(item) => `${item.activityId}`}
          />
        </View>
      </View>
    );
  }
};  


export const ProblemDisplay = (props) => {
  const [questionChoices, setQuestionChoices] = useState(props.choices);
  const [question, setQuestion] = useState(props.question);
  const [answer, setAnswer] = useState(props.answer);

  var disable = 0; // a failsafe for cheesy users who try to tap a button before the incorrect answer timeout
  var incorrect = 0;
  const checkAnswer = (choice) => {
    if (disable == 0) {
      if (choice === answer) {
        correctAnswer();
      } else {
        incorrectAnswer();
      }
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
      alert("Incorrect! The correct answer is " + answer);
      disable = 1;
      setTimeout(nextQuestion, 1000);
      disable = 0;
    } else {
      incorrect++;
      alert("Incorrect! Try again!");
    }
  };

  const nextQuestion = () => {
    //console.log("next question");

    if (questionNum >= MultipleChoiceData[problemSet].questions.length - 1 || questionNum == -1) {
      alert("You have completed the problem set!");
      questionNum = -1; //marks that the problem set is done, gets set to 0 only upon reentering
      //disable = 1; //optional; might just look more correct if you can't select anything
      return;
    }
    questionNum++;
    
    setQuestionChoices(MultipleChoiceData[problemSet].questions[questionNum].choices);
    setQuestion(MultipleChoiceData[problemSet].questions[questionNum].question);
    setAnswer(MultipleChoiceData[problemSet].questions[questionNum].answer);
  };
  
  return (
    
    <View>
      <Text style={styles.Question}>{question}</Text>
      {questionChoices.map((choice) => {
        return (
          <TouchableOpacity
            style={styles.Button}
            onPress={() => checkAnswer(choice)}
            key={choice}
          >
            <Text style={styles.ButtonTxt}>{choice}</Text>
          </TouchableOpacity>
        );
      })}
      <TouchableOpacity onPress={() => nextQuestion()} style={styles.Next}>
        <Text style={styles.NextTxt}>Next Question</Text>
      </TouchableOpacity>
    </View>
  );
  
    
}

const styles = StyleSheet.create({
  Title: {
    fontSize: 60,
    fontWeight: "800",
    color: "darkorange",
    textAlign: "center",
    marginVertical: "5%",
  },
  Button: {
    marginHorizontal: "5%",
    marginTop: "5%",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 5,
    borderColor: "red",
    backgroundColor: "gold",
    borderRadius: 25,
  },
  ButtonTxt: {
    fontSize: 30,
    fontWeight: "700",
    color: "red",
    alignSelf: "center"
  },
  Question: {
    fontSize: 35,
    fontWeight: "800",
    color: "darkorange",
    textAlign: "center",
    marginVertical: "5%",
    marginHorizontal: "5%"
  },
  Next: {
    width: "50%",
    marginHorizontal: "5%",
    marginTop: "5%",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 5,
    borderColor: "#8888FF",
    backgroundColor: "lightblue",
    borderRadius: 15,
    alignSelf: "center"
  },
  NextTxt: {
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Courier New",
    color: "#4444FF",
    alignSelf: "center"
  },
})

export default MultipleChoice;
