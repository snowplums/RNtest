import React, {useState, useEffect} from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import {getLast, clearAll} from "../storage/asyncStorage";



import { Lessons } from "../data/Lessons";
import { Practice } from "../data/Practice";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useIsFocused } from '@react-navigation/native'
import { NavigationActions, SwitchActions } from "react-navigation";



const HomeScreen =  ( props ) => {
  const { navigation, route } = props;
  const [currentLesson, setCurrentLesson] = useState('0');

  const isFocused = useIsFocused()

useEffect(() => {
  const fetchData = async () =>{
    if(isFocused){
    
    const currentLesson = await AsyncStorage.getItem('last');
      if(currentLesson){
    //console.log(currentLesson)
    setCurrentLesson(currentLesson);}
    else setCurrentLesson('0');
  }
  }
  fetchData().catch(console.error);
  },[isFocused]
)
  

const onPressLast = () => {
  
  if(currentLesson){

  var lastLesson = Lessons[parseInt(currentLesson)-1];
  //console.log(lastLesson);


  
    navigation.navigate("Lessons", { screen: "LessonPage", params: {lesson: lastLesson} });

  }
  else{
    console.log('no last lesson');
  }
  
}



 // const previousLesson = await getLast();
   
  const LastLesson = () => {
    //navigation.navigate("LessonPage", { lastL });
  };

  const LastPractice = () => {
    //navigation.navigate("LessonPage", { lastP });
  };

  
  return (
    <View>
      <Text style={styles.Welcome}>Welcome Back!</Text>
      <TouchableOpacity
        onPress={onPressLast}
        style={styles.button}
      >
        <Icon name="arrow-right" style={styles.icon}></Icon>
        <View>
          <Text style={styles.lastTxt}>
            Last Lesson:
          </Text>
          <Text style={styles.nameTxt}>
          {(Lessons[parseInt(currentLesson)-1])?Lessons[parseInt(currentLesson)-1].title:'No data'}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {clearAll();}}
        style={styles.button}
      >
        <Icon name="arrow-right" style={styles.icon}></Icon>
        <View>
          <Text style={styles.lastTxt}>
            Last Practice:
          </Text>
          <Text style={styles.nameTxt}>
            
          </Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.regTxt}>
        Progress Bar:
      </Text>
      <View style={styles.progress}></View>
      <View style={styles.progBox}></View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create ({
  Welcome: {
    fontSize: 75,
    fontWeight: "700",
    textAlign: 'center',
    fontFamily: 'Verdana',
    marginTop: '5%',
    marginBottom: '15%'
  },
  lastTxt: {
    fontSize: 35,
    fontWeight: "800",
    color: "#AAAAFF",
    textAlign: 'left'
  },
  nameTxt:{
    fontSize: 20,
    fontWeight: "800",
    color: "red",
    textAlign: 'center'
  },
  regTxt: {
    fontSize: 30,
    fontWeight: "400",
    color: "#888888",
    textAlign: 'center',
    fontFamily: 'Helvetica',
    marginTop: '5%',
    marginBottom: '5%'
  },
  button: {
    width: 380,
    paddingVertical: 6,
    flexDirection: "row",
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "blue",
    backgroundColor: "lightblue",
    alignSelf: "center",
    alignItems: 'center',
    marginBottom: '5%'
  },
  icon: {
    color: "#00F300",
    fontSize: 80,
    height: 80,
    width: '25%'
  },
  progBox: {
    width: 380,
    height: 30,
    borderWidth: 3,
    borderRadius: 10,
    alignSelf: 'center',
    position: 'absolute',
    top: 575,
  },
  progress: {
    width: 200,
    height: 24,
    backgroundColor: 'red',
    borderColor: 'red',
    position: 'absolute',
    top: 578,
    left: 20
  }
});
