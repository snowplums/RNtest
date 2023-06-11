import React from "react";
import { FlatList, Text, View, TouchableHighlight, Image } from "react-native";

import { Lessons } from "../data/Lessons";

const LessonScreen = (props) => {
  const { navigation, route } = props;

  //const lesson = route.params?.lesson;

  const onPressLesson = (lesson) => {
    //console.log(lesson);
    navigation.navigate("LessonPage", { lesson });
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

export default LessonScreen;
