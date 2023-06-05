import React from "react";
<<<<<<< Updated upstream
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";

const LessonPage = (props) => {
  const { navigtion, route } = props;

  const lesson = route.params?.lesson;

  return (
    <ScrollView>
      <View></View>
    </ScrollView>
  );
=======
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import { Lessons } from "../data/Lessons";

const styles = StyleSheet.create ({
  Button: {
    //method of positioning is kind of stupid
    position: 'fixed',
    paddingHorizontal: 6,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'red',
    backgroundColor: 'gold',
  },
  back: {
    width: 105,
    left: 15,
    top: 560
  },
  next: {
    width: 100,
    left: 300,
    top: 510
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
  return <View>
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
          onPress={() => (lessonId < 3) ? onPressNext(Lessons[lessonId]) : console.log('Unable to go next.')}
          style={[styles.Button, styles.next, lessonId == 3 && styles.off]}
        >
          <Text
          style={styles.buttonTxt}
          >
            Next
          </Text>
        </TouchableOpacity>
    </View>;
>>>>>>> Stashed changes
};

export default LessonPage;
