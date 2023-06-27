import React, {useState} from "react";

import { View, Text, Button, Switch, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { setLast, clearAll } from "../storage/asyncStorage";

const UserScreen = ({ navigation }) => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const clearData = () => {
    Alert.alert('Clear Data', 'Are you sure you want to clear all data? This will reset all progress and settings.', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel'
    },
    {
      text: `I'm Sure`, 
      onPress: () => {clearAll(); navigation.navigate("Home")}
    }]);
  }

  return (

    <View>
  

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
      <Button title="Clear Data" onPress={clearData} />
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
