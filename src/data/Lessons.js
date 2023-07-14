import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginHorizontal: "7%",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 10,
  },
  underlined: {
    textDecorationLine: "underline",
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: "center",
    marginVertical: 10,
  },
  imageSmall: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginVertical: 10,
  },
});

export const Lessons = [
  {
    lessonId: 1,
    title: "L e s s o n     1",
    content: (
      <>
        <Text style={styles.title}>Lesson 1</Text>
        <Text style={styles.text}>
          Lesson content here...
          {"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"}Hello
          blahblah lbaafaefaefae
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
          <Text>第一课：英语介绍</Text>
        </Text>

        <Text>
          <Text>英语字母</Text>
        </Text>
        <Text>
          <Image
            width={Dimensions.get("window").width}
            source={require("../images/LessonX_0.png")}
          />
        </Text>
        <Text>TEMPLATE– CHANGE LATER</Text>

        <Text>元音和辅音</Text>
        <Text>
          英语分成二十六个字母。五个是元音（vowels) ，二十一个是辅音
          （consonants)。
        </Text>

        <Text>Vowels: </Text>
        <Text>A</Text>
        <Text>E</Text>
        <Text>I</Text>
        <Text>O</Text>
        <Text>U</Text>
        <Text>剩下的都是辅音。</Text>

        <Text>发音</Text>
        <Text>英文不强调音调。</Text>

        <Text style={styles.title}>
          <Text>第二课：基本句子形状</Text>
        </Text>

        <Text>Sally found an apple at home</Text>
        <Text>Sally是一个名词因为她是一个人物。</Text>

        <Text></Text>
        <Text> </Text>

        <Text>
          <Text>单数和复数名词</Text>
        </Text>
        <Text>Singular & Plural Nouns</Text>
        <Text>单数名词（Singular) 只是一个。</Text>
        <Text>比如说一棵树 （tree)。</Text>
        <Text>在英语，我们会写：</Text>
        <Text>Tree</Text>
        <Text>复数名词（Plural）是多于一个。</Text>
        <Text>可以是两颗树，十棵树，如果大于一，就成为复数了。写成：</Text>
        <Text>Trees</Text>

        <Text>A 和 AN</Text>
        <Text>每个可数名词之前，要放 “a” 或者 ”an“。</Text>
        <Text>“A” 只能跟辅音开头的字，“An” 只能跟元音开头的字。</Text>

        <Text>She found an apple. </Text>
        <Text>苹果是一个元音词开始得所以必须得用”An”来连起。</Text>

        <Text>She found a banana.</Text>
        <Text>
          香蕉是这句子的名词，也是一个辅音词开始得所以我们要用“a”来连上。
        </Text>

        <Text>Verbs</Text>
        <Text>动词(Verbs)显示动作，也可以显示一个生物的状况。</Text>

        <Text>To-be Verbs</Text>
        <Text>系动词是在英文叫to-be verbs: is, am, are, were, was</Text>
        <Text>我们用to-be verbs来显示一个东西是什么。</Text>
        <Text>She is a student.</Text>
        <Text>They are a part of the football team. </Text>

        <Text>Singular/Plural Conjugation</Text>
        <Text>
          如果一个句子的主语是单数，那动词要加”s”。如果是复数名词，动词不加”s“
        </Text>
        <Text>He sings for the school choir.</Text>
        <Text>They eat lunch together. </Text>

        <Text>Negative</Text>
        <Text>通过加否定词”not”到主要的动词之前，来否定整句话的意思。</Text>
        <Text>He did not join the soccer team. </Text>

        <Text>Descriptors</Text>

        <Text>Adjectives</Text>
      </>
    ),
  },
  {
    lessonId: 3,
    title: "L e s s o n     3",
    content: (
      <>
        <Text style={styles.title}>Lesson 3</Text>
        <Text style={styles.text}>
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
