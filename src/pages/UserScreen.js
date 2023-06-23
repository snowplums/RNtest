import React, {useState} from "react";

import { View, Text, Button, Switch, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { setLast, test } from "../storage/asyncStorage";

const UserScreen = ({ navigation }) => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [input, setInput] = useState('')

  const pressed = async () => {
    try {
      await AsyncStorage.setItem('key', "Hi there")
    } catch(e) {
      // save error
    }
  
    console.log('Done.')
  }

  const pressed2 = async () => {
    try {
      return await AsyncStorage.getItem('key')
    } catch(e) {
      // read error
    }
  
    console.log('Done.')
    
  }

  const returnedData = () => {
    AsyncStorage.getItem('key').then((value) =>
      {if(value) console.log(value)}
    )
  }

  return (

    <View>
      <Button title="hi" onPress={pressed}/>
      <Button title="hi" onPress={returnedData}/>


      <Text style={styles.bigTxt}>Settings</Text>
      <View style={styles.setting}>
        <Text style={styles.setText}>Dark Mode:</Text>
        <Switch
          trackColor={{false: '#777777', true: '#81b0ff'}}
          thumbColor='#ffffff'
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={styles.switch}
        />
      </View>
    </View>
    
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8fcbbc",
  },
  bigTxt: {
    fontSize: 50,
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: 'Verdana',
    marginTop: '5%',
    marginBottom: '10%'
  },
  setText: {
    fontSize: 35,
    fontWeight: '300',
    marginRight: 15
  },
  setting: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    width: 340,
    height: 50
  },
  switch: {

  }
});
