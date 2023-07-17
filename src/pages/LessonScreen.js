import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";

import { isCompleted } from "../storage/asyncStorage";

import { Lessons } from "../data/Lessons";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
var ButtonColor;
var BorderColor;
var txtColor;

const LessonScreen = (props) => {
  const { navigation, route } = props;
  const [lessonState, setLessonState] = useState(
    new Array(Lessons.length).fill("incomplete")
  );
  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchData = async () => {
      if (isFocused) {
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

  //const lesson = route.params?.lesson;

  const onPressLesson = (lesson) => {
    navigation.navigate("LessonPage", { lesson });
  };

  const renderLessons = ({ item }) => {
    if (lessonState[item.lessonId - 1] == "complete") {
      ButtonColor = "lightgray";
      BorderColor = "darslategray";
      txtColor = "#AAAAAA";
    } else {
      ButtonColor = "#FF4444";
      BorderColor = "darkred";
      txtColor = "#A90000";
    }

    const buttonStyle = StyleSheet.create({
      button: {
        width: 340,
        paddingVertical: 6,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: BorderColor,
        backgroundColor: ButtonColor,
        alignSelf: "center",
        marginTop: 9,
      },
    });

    const styles = StyleSheet.create({
      LTxt: {
        fontSize: 20,
        fontWeight: "700",
        color: txtColor,
        marginLeft: "15%",
      },
      LTxtTwo: {
        marginLeft: "12.5%",
      },
      LTxtThree: {
        marginLeft: "10%",
      },
    });

    return (
      <View>
        <TouchableOpacity
          onPress={() => onPressLesson(item)}
          style={buttonStyle.button}
        >
          <Text
            style={[
              styles.LTxt,
              item.lessonId >= 10 && styles.LTxtTwo,
              item.lessonId >= 100 && styles.LTxtThree,
            ]}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
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
          data={Lessons}
          renderItem={renderLessons}
          keyExtractor={(item) => `${item.lessonId}`}
          style={{ zIndex: 0 }}
        />
      </View>
    </View>
  );
};

export default LessonScreen;
