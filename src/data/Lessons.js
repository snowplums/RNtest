import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create ({
  txt: {
    fontSize: 20,
    marginHorizontal: '7%',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 10
  }
});

export const Lessons = [
  {
    lessonId: 1,
    title: "L e s s o n     1",
    content: (
      <>
        <Text style={styles.title}>
          Lesson 1
        </Text>
        <Text style={styles.txt}>
          Lesson content here...
          {"\n"}Hello blahblah lbaafaefaefae
        </Text>
      </>
    ),
  },
  {
    lessonId: 2,
    title: "L e s s o n     2",
    content: (
      <>
        <Text style={styles.title}>
          Lesson 2
        </Text>
        <Text style={styles.txt}>
          Lesson content here...
          {"\n"}Hello blahblah lbaafaefaefae
        </Text>
      </>
    ),
  },
  {
    lessonId: 3,
    title: "L e s s o n     3",
    content: (
      <>
        <Text style={styles.title}>
          Lesson 3
        </Text>
        <Text style={styles.txt}>
          Lesson content here...
          {"\n"}Hello blahblah lbaafaefaefae
        </Text>
      </>
    ),
  },
  {
    lessonId: 10,
    title: "L e s s o n     10",
    content: (
      <>
        <Text>Lesson10 here...</Text>
        <Text>Hello world blahblah lbaafaefaefae</Text>
      </>
    ),
  },
  {
    lessonId: 100,
    title: "L e s s o n     100",
    content: (
      <>
        <Text>Lesson100 here...</Text>
        <Text>Hello world blahblah lbaafaefaefae</Text>
      </>
    ),

  },
];
