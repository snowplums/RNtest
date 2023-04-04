import React from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";

import { Lessons } from "../data/Lessons";

const LessonPage = (props) => {
  const { navigtion, route } = props;

  const lesson = route.params?.lesson;

  return (
    <ScrollView>
      <View>
        <Text>Bozo</Text>
      </View>
    </ScrollView>
  );
};

export default LessonPage;
