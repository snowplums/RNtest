import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const styles = StyleSheet.create({
  images: {
    resizeImage: "contain",
  },
});

export const Practice = [
  {
    title: "Multiple Choice",
    image: <Image source={require("../images/multipleChoice.png")} />,
    activityId: 1,
    route: "MultipleChoice",
  },
  {
    title: "Sentence Scrambler",
    image: <Image source={require("../images/temp.png")} />,
    activityId: 2,
    route: "SentenceScrambler",
  },
];
