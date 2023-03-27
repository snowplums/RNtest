import React from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";

const LessonPage = (props) => {
  const { navigtion, route } = props;

  const lesson = route.params?.lesson;

  return (
    <ScrollView>
      <View></View>
    </ScrollView>
  );
};

export default LessonPage;
