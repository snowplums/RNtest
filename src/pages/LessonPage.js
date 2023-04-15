import React from "react";
import { FlatList, Text, View, TouchableHighlight, Image } from "react-native";

import { Lessons } from "../data/Lessons";

const LessonPage = (props) => {
  const { navigation, route } = props;

  //const lesson = route.params?.lesson;

  const onPressLesson = (item) => {
    navigation.navigate("Home", { screen: "HomeScreen" });
  };

  const renderLessons = ({ item }) => {
    return (
      <TouchableHighlight
        underlayColor="rgba(73,182,77,0.9)"
        onPress={() => onPressLesson(item)}
      >
        <View>
          <Text>{item.title}</Text>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <View>
      <FlatList
        data={Lessons}
        renderItem={renderLessons}
        keyExtractor={(item) => `${item.lessonId}`}
      />
    </View>
  );
};

export default LessonPage;
