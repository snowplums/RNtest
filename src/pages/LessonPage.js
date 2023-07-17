import React, {useRef} from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";

import { Lessons } from "../data/Lessons";
import {completeLesson, setLast} from "../storage/asyncStorage";

const styles = StyleSheet.create ({
  Button: {
    //method of positioning is kind of stupid
    paddingHorizontal: 6,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'red',
    backgroundColor: 'gold',
  },
  back: {
    width: 105,
    left: 15,
  },
  next: {
    position: "absolute",
    width: 105,
    left: Dimensions.get("window").width - 120,
  },
  off: {
    backgroundColor: 'lightgray'
  },
  buttonTxt: {
    fontSize: 40,
    fontWeight: '500',
    color: 'magenta',
  },
  buttonsRow: {
    flexDirection: "row",
    position: "absolute",
    bottom: Dimensions.get("window").height * 0.05
  },
});

const LessonPage = ({ navigation, route }) => {
  const { content, lessonId } = route.params.lesson;

  const scrollRef = useRef();
  const onPressNext = (lesson) => {
    //console.log(lesson);
    navigation.navigate("LessonPage", { lesson });
    scrollRef.current?.scrollTo({y: 0, animated: false });
  };
//must set maximum lesson id value for the next button ------------

  completeLesson(lessonId);
  setLast(lessonId);

  return (
    <View style={{ height: "100%" }}>
      <ScrollView ref={scrollRef} contentContainerStyle={{ paddingBottom: 80 }}>
        {content}
      </ScrollView>
      <View style={styles.buttonsRow}>
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
          style={[styles.Button, styles.next, lessonId == Lessons.length && styles.off]}
        >
          <Text
          style={styles.buttonTxt}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LessonPage;