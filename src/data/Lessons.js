import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: "center",
    marginHorizontal: "7%",
  },
  title: {
    fontSize: 40,
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
  listItem: {
    fontSize: 18,
    textAlign: "justify",
    lineHeight: 1,
  },
});

export const Lessons = [
  {
    lessonId: 1,
    title: "Lesson 1: Alphabet",
    content: (
      <>
        <Text style={styles.text}>
          Title: 学习英文字母 (Learn English Alphabet)
        </Text>
        <Text style={styles.text}>
          Introduction:
          欢迎大家来到学习英文字母的课程！英文字母是学习英语的基础，掌握它们将帮助我们更好地阅读、写作和交流。本课程将详细介绍英文字母、元音和辅音的发音和用法。让我们开始吧！
        </Text>
        <Text style={styles.listItem}>
          -英文字母 (English Alphabet):
          英文字母共有26个，它们是A、B、C、D、E、F、G、H、I、J、K、L、M、N、O、P、Q、R、S、T、U、V、W、X、Y和Z。下面我们将逐个介绍每个字母。
        </Text>
        <Text style={styles.listItem}>
          -A (ei): 字母A的发音是 [ei]，它是元音字母。例如：apple (苹果)、animal
          (动物)。
        </Text>
        <Text style={styles.listItem}>
          -B (bi): 字母B的发音是 [bi]，它是辅音字母。例如：ball (球)、bird
          (鸟)。
        </Text>
        <Text style={styles.listItem}>
          -C (si): 字母C的发音是
          [si]，它既可以是辅音字母，也可以是元音字母。在某些单词中，字母C发音为
          [k]，如cat (猫)；在其他单词中，字母C发音为 [s]，如city (城市)。
        </Text>
        <Text style={styles.text}>依此类推，我们逐个介绍所有字母。</Text>
        <Text style={styles.listItem}>
          -元音 (Vowels):
          元音是英语中的重要音素，共有5个元音字母：A、E、I、O和U。下面我们详细介绍每个元音字母及其发音。
        </Text>
        <Text style={styles.listItem}>
          -A (ei): 前面已经提到过，字母A的发音是 [ei]。例如：cat (猫)、hat
          (帽子)。
        </Text>
        <Text style={styles.listItem}>
          -E (i:): 字母E的发音是 [i:]。例如：pen (钢笔)、bed (床)。
        </Text>
        <Text style={styles.listItem}>
          -I (ai): 字母I的发音是 [ai]。例如：pig (猪)、big (大)。
        </Text>
        <Text style={styles.listItem}>
          -O (əʊ): 字母O的发音是 [əʊ]。例如：dog (狗)、pot (锅)。
        </Text>
        <Text style={styles.listItem}>
          -U (ju:) 字母U的发音是 [ju:]。例如：cup (杯子)、sun (太阳)。
        </Text>
        <Text style={styles.listItem}>
          -辅音 (Consonants):
          除了元音，英语中还有辅音字母。下面是一些常见的辅音字母及其发音。
        </Text>
        <Text style={styles.listItem}>
          -B (bi): 前面已经提到过，字母B的发音是 [bi]。例如：book (书)、bus
          (公共汽车)。
        </Text>
        <Text style={styles.listItem}>
          -C (si): 前面已经提到过，字母C的发音是 [si]。例如：cat (猫)、cup
          (杯子)。
        </Text>
        <Text style={styles.listItem}>
          -D (di:): 字母D的发音是 [di:]。例如：dog (狗)、door (门)。
        </Text>
        <Text style={styles.listItem}>
          -F (ef): 字母F的发音是 [ef]。例如：fish (鱼)、food (食物)。
        </Text>
        <Text style={styles.listItem}>
          -G (dʒi:): 字母G的发音是 [dʒi:]。例如：go (去)、game (游戏)。
        </Text>
        <Text style={styles.text}>继续介绍其他常见的辅音字母。</Text>
        <Text style={styles.listItem}>
          -字母组合 (Letter Combinations):
          在英语中，有些字母会组合在一起形成特定的音素。以下是一些常见的字母组合及其发音。
        </Text>
        <Text style={styles.listItem}>
          -CH (tʃ): 字母组合CH的发音是 [tʃ]。例如：chair (椅子)、cheese (奶酪)。
        </Text>
        <Text style={styles.listItem}>
          -TH (θ/ð): 字母组合TH有两种发音，分别是 [θ] 和 [ð]。例如：thank you
          (谢谢)、this (这)。
        </Text>
        <Text style={styles.listItem}>
          -SH (ʃ): 字母组合SH的发音是 [ʃ]。例如：ship (船)、sheep (绵羊)。
        </Text>
        <Text style={styles.listItem}>
          -PH (f): 字母组合PH的发音是 [f]。例如：phone (电话)、photo (照片)。
        </Text>
        <Text style={styles.text}>
          还有其他字母组合，我们会在以后的课程中介绍。
        </Text>
        <Text style={styles.text}>
          总结:
          在本课程中，我们学习了英文字母、元音和辅音的发音和用法。掌握这些基础知识对于学习英语非常重要。请多加练习和实践，加深对英文字母的认识。祝大家学习愉快！
        </Text>
        <Text style={styles.text}>
          请注意：在拼写单词时，有时候英语的发音和拼写之间存在一定的差异。这是英语语言的特点之一，我们将在后续的课程中逐步介绍和解释。
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
