import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { lessons } from "../data/Lessons";

import { FlatList, TouchableHighlight } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  const LastLesson = () => {
    navigation.navigate("Lessons", { screen: "LessonScreen" });
  };

  const renderLessons = ({ lesson }) => (
    <TouchableHighlight onPress={() => {}}>
      <View>
        <Text></Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      <Button
        onPress={() => {
          navigation.navigate("Lessons", { screen: "LessonScreen" });
        }}
        title={"Test"}
      />
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
