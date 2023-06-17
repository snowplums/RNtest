import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView , Dimensions} from "react-native";

import { Lessons } from "../data/Lessons";

const styles = StyleSheet.create ({
  Button: {
    //method of positioning is kind of stupid
    position: 'absolute',
    paddingHorizontal: 6,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'red',
    backgroundColor: 'gold',
  },
  back: {
    width: 105,
    left: 15,
    bottom:0
  },
  next: {
    width: 100,
    left: 300,
    bottom: 0
  },
  off: {
    backgroundColor: 'lightgray'
  },
  buttonTxt: {
    fontSize: 40,
    fontWeight: '500',
    color: 'magenta',
  }
});

const LessonPage = ({ navigation, route }) => {
  const { content, lessonId } = route.params.lesson;
  console.log(route);
  const onPressNext = (lesson) => {
    //console.log(lesson);
    navigation.navigate("LessonPage", { lesson });
  };
//must set maximum lesson id value for the next button ------------
  return (
  <ScrollView contentContainerStyle={{paddingBottom: 80}}>
    {content}
        <TouchableOpacity
          onPress={() => (lessonId > 1) ? onPressNext(Lessons[lessonId-2]) : console.log('Unable to go back.')}
          style={[styles.Button, styles.back, lessonId == 1 && styles.off]}
        >
          <Text
          style={styles.buttonTxt}
          >
            Back
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => (lessonId < Lessons.length) ? onPressNext(Lessons[lessonId]) : console.log('Unable to go next.')}
          style={[styles.Button, styles.next, lessonId == 3 && styles.off]}
        >
          <Text
          style={styles.buttonTxt}
          >
            Next
          </Text>
        </TouchableOpacity>
    </ScrollView> 
    );
};

export default LessonPage;