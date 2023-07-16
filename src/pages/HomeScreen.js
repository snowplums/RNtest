import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { getLast, clearAll } from "../storage/asyncStorage";

import { Lessons } from "../data/Lessons";
import { Practice } from "../data/Practice";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useIsFocused } from "@react-navigation/native";
import { NavigationActions, SwitchActions } from "react-navigation";

const HomeScreen = (props) => {
  const { navigation, route } = props;
  const [currentLesson, setCurrentLesson] = useState("0");

  const isFocused = useIsFocused();
  const [lessonState, setLessonState] = useState(
    new Array(Lessons.length).fill("incomplete")
  );

  useEffect(() => {
    const fetchData = async () => {
      if (isFocused) {
        const currentLesson = await AsyncStorage.getItem("last");
        if (currentLesson) {
          //console.log(currentLesson)
          setCurrentLesson(currentLesson);
        } else setCurrentLesson("0");
        var tempArray = new Array(Lessons.length).fill("incomplete");
        var lessonStatus;
        for (let i = 0; i < Lessons.length; i++) {
          lessonStatus = await AsyncStorage.getItem(
            JSON.stringify(Lessons[i].lessonId)
          );
          if (lessonStatus === "true") {
            tempArray[i] = "complete";
          }
        }
        setLessonState(tempArray);
      }
    };
    fetchData().catch(console.error);
  }, [isFocused]);

  const onPressLast = () => {
    if (currentLesson != 0) {
      var lastLesson = Lessons[parseInt(currentLesson) - 1];
      //console.log(lastLesson);

      navigation.navigate("Lessons", {
        screen: "LessonPage",
        params: { lesson: lastLesson },
      });
    } else {
      console.log("no last lesson");
    }
  };

  // const previousLesson = await getLast();

  const LastLesson = () => {
    //navigation.navigate("LessonPage", { lastL });
  };

  const LastPractice = () => {
    //navigation.navigate("LessonPage", { lastP });
  };

  const getProgress = () => {
    var completed = 0;
    for (var i = 0; i < lessonState.length; i++) {
      if (lessonState[i] == "complete") {
        completed++;
      }
    }
    return completed / lessonState.length;
  };

  const styles = StyleSheet.create({
    WelcomeShadow: {
      fontSize: 75,
      fontWeight: "700",
      color: "black",
      textAlign: "center",
      fontFamily: "Verdana",
      marginTop: "8%",
      marginBottom: "15%",
      marginLeft: "1%",
    },
    Welcome: {
      fontSize: 75,
      fontWeight: "700",
      color: "darkred",
      textAlign: "center",
      fontFamily: "Verdana",
      marginTop: "7%",
      marginBottom: "16%",
    },
    lastTxt: {
      fontSize: 35,
      fontWeight: "800",
      color: "#DD2222",
      textAlign: "left",
    },
    nameTxt: {
      fontSize: 20,
      fontWeight: "800",
      color: "red",
      textAlign: "center",
    },
    regTxt: {
      fontSize: 30,
      fontWeight: "800",
      color: "red",
      textAlign: "center",
      fontFamily: "Verdana",
      marginTop: "15%",
      marginBottom: "10%",
    },
    button: {
      width: 380,
      paddingVertical: 6,
      flexDirection: "row",
      borderWidth: 3,
      borderRadius: 20,
      borderColor: "darkred",
      backgroundColor: "#FF9966",
      alignSelf: "center",
      alignItems: "center",
      marginBottom: "5%",
    },
    icon: {
      color: "#00F300",
      fontSize: 80,
      height: 80,
      width: "25%",
    },
    progBox: {
      width: 380,
      height: 30,
      borderWidth: 3,
      borderColor: "darkred",
      borderRadius: 10,
      alignSelf: "center",
      position: "absolute",
      top: 525,
    },
    progress: {
      width: 380 * getProgress(),
      height: 24,
      backgroundColor: "#BBD900",
      position: "absolute",
      top: 528,
      left: Dimensions.get("window").width / 2 - 190,
    },
  });

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
        <View
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            borderColor: "darkred",
            borderWidth: 5,
          }}
        ></View>
        <View
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            borderColor: "darkred",
            borderWidth: 5,
            borderRadius: 20,
            alignSelf: "center",
          }}
        ></View>
      </View>
      <View style={{ height: "100%", width: "100%", position: "absolute" }}>
        <Text style={styles.WelcomeShadow}>Welcome Back!</Text>
        <TouchableOpacity onPress={onPressLast} style={styles.button}>
          <Icon name="arrow-right" style={styles.icon}></Icon>
          <View>
            <Text style={styles.lastTxt}>Last Lesson:</Text>
            <Text style={styles.nameTxt}>
              {Lessons[parseInt(currentLesson) - 1]
                ? Lessons[parseInt(currentLesson) - 1].title
                : "No data"}
            </Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.regTxt}>Progress Bar:</Text>
        <View style={styles.progress}></View>
        <View style={styles.progBox}></View>
      </View>
      <View
        style={{ height: "100%", width: "100%", position: "absolute" }}
        pointerEvents="none"
      >
        <Text style={styles.Welcome}>Welcome Back!</Text>
      </View>
    </View>
  );
};

export default HomeScreen;
