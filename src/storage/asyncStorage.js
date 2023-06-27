import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Set last lesson
const setLast = async (last) => {
    try{
    await AsyncStorage.setItem('last', JSON.stringify(last));
    }catch (error){
        console.log(error);
    }

}

const getLast = async () => {
    try{
        var value = await AsyncStorage.getItem('last')
            if(value){
                return value;
            }
             else return null;
        
    }catch (error){
    console.log(error);
}
}


const completeLesson = async (lessonId) => {
    try {
        await AsyncStorage.setItem(JSON.stringify(lessonId), "true");
    }catch (error){
        console.log(error);
    }
};

const incompleteLesson = async (lessonId) => {
    try {
        await AsyncStorage.setItem(JSON.stringify(lessonId), "false");
    }catch (error){
        console.log(error);
    }
}; 

const isCompleted = async (lessonId) => {
    try {
        AsyncStorage.getItem(JSON.stringify(lessonId)).then(

            (value) => {if(value) return value}
        )
    }catch (error){
        console.log(error);
    }
};

const clearAll = async () => {
    try {
        await AsyncStorage.clear();
    }catch (error){
        console.log(error);
    }

};









export  {
    setLast,
    getLast,
    completeLesson,
    incompleteLesson,
    isCompleted,
    clearAll
};




