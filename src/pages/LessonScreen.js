import React from "react";
import { StyleSheet, FlatList, Text, View, TouchableOpacity, Image } from "react-native";

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
      <View>
        <TouchableOpacity
          onPress={() => onPressLesson(item)}
          style={styles.button}
        >
          <Text
          style={[styles.LTxt, 
                item.lessonId >= 10 && styles.LTxtTwo, 
                item.lessonId >= 100 && styles.LTxtThree]}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const styles = StyleSheet.create ({
    LTxt: {
      fontSize: 40,
      fontWeight: '700',
      color: 'magenta',
      marginLeft: '15%'
    },
    LTxtTwo: {
      marginLeft:'12.5%'
    },
    LTxtThree: {
      marginLeft:'10%'
    },
    button: {
      width: 340,
      paddingVertical: 6,
      borderWidth: 2,
      borderRadius: 20,
      borderColor: 'red',
      backgroundColor: 'gold',
      alignSelf: 'center',
      marginTop: 9,
    }
  });

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
