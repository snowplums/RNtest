import React , {useState, useEffect}from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";

import {isCompleted} from "../storage/asyncStorage";

import { Lessons } from "../data/Lessons";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from '@react-navigation/native'
var ButtonColor;
 

const LessonScreen = (props) => {
  const { navigation, route } = props;
  const [lessonState, setLessonState] = useState(new Array(Lessons.length).fill('incomplete'));

  const isFocused = useIsFocused()
  
  useEffect(() => {
    const fetchData = async () =>{
      if(isFocused){
        var tempArray = new Array(Lessons.length).fill('incomplete'); 
        var lessonStatus;
        for(let i = 0; i < Lessons.length; i++){
         
          lessonStatus = await AsyncStorage.getItem(JSON.stringify(Lessons[i].lessonId));
          console.log(lessonStatus);
          if(lessonStatus === 'true'){
            tempArray[i] = 'complete';
          }
        }
        setLessonState(tempArray);
        console.log(lessonState);
      }
    }
    fetchData().catch(console.error);
    },[isFocused]
  )



  
  //const lesson = route.params?.lesson;

  const onPressLesson = (lesson) => {
    //console.log(lesson);
    navigation.navigate("LessonPage", { lesson });
  };

  const renderLessons = ({ item }) => {
  

    if(lessonState[item.lessonId-1] == 'complete'){
      ButtonColor = 'green';
    }else{
      ButtonColor = 'red';
    }

    var buttonStyle = StyleSheet.create({
      button: {
        width: 340,
        paddingVertical: 6,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: "red",
        backgroundColor: ButtonColor,
        alignSelf: "center",
        marginTop: 9,
      }
    });


   
    return (
      <View>
        <TouchableOpacity
          onPress={() => onPressLesson(item)}
          style={buttonStyle.button}
        >
          <Text
            style={[
              styles.LTxt,
              item.lessonId >= 10 && styles.LTxtTwo,
              item.lessonId >= 100 && styles.LTxtThree,
              
            ]}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const styles = StyleSheet.create({
    LTxt: {
      fontSize: 40,
      fontWeight: "700",
      color: "magenta",
      marginLeft: "15%",
    },
    LTxtTwo: {
      marginLeft: "12.5%",
    },
    LTxtThree: {
      marginLeft: "10%",
    },
    
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
