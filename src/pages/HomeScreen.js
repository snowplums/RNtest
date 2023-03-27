import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { lessons } from "../data/Lessons.json";

import { FlatList, TouchableHighlight } from "react-native-gesture-handler";

const HomeScreen = (props) => {
  const { navigation } = props;

  const LastLesson = (lesson) => {
    navigation.navigate("LessonPage", { lesson });
  };

  const renderLessons = ({ lesson }) => (
    <TouchableHighlight onPress={() => LastLesson(lesson)}>
      <View>
        <Text></Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      <Button onPress={LastLesson()} title={"Continue"} />
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={lessons}
        renderItem={renderLessons}
        keyExtractor={(lesson) => `${lesson.lessonId}`}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8fcbbc",
  },
});
