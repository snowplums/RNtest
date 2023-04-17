import React from "react";
import { View, Text, Image } from "react-native";

const LessonPage = ({ navigation, route }) => {
  const { content } = route.params.lesson;
  console.log(route);
  return <View>{content}</View>;
};

export default LessonPage;
