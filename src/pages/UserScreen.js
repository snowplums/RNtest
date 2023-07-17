import React, {useState} from "react";

import { View, Text, Button, Switch, TouchableOpacity, StyleSheet, Alert, Touchable } from "react-native";
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
      <View style={{ justifyContent: "center", height: "100%" }}>
        <View
          style={{
            position: "absolute",
            height: 900,
            width: 900,
            backgroundColor: "#FFCC99",
            alignSelf: "center",
            borderRadius: 450,
          }}
        ></View>
        <View
          style={{
            position: "absolute",
            height: 600,
            width: 600,
            backgroundColor: "#FFEE99",
            alignSelf: "center",
            borderRadius: 300,
          }}
        ></View>
        <View
          style={{
            position: "absolute",
            height: 300,
            width: 300,
            backgroundColor: "#FFCC99",
            alignSelf: "center",
            borderRadius: 150,
          }}
        ></View>
      </View>
      <View style={{ height: "100%", width: "100%", position: "absolute" }}>
        <View
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            borderColor: "darkred",
            borderWidth: 6,
            zIndex: 1,
          }}
          pointerEvents="none"
        ></View>
        <View
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            borderColor: "darkred",
            borderWidth: 6,
            borderRadius: 20,
            zIndex: 1,
          }}
          pointerEvents="none"
        ></View>

        <Text style={styles.bigTxt}>Settings</Text>
        <View style={styles.setting}>
          {/*<Text style={styles.setText}>Dark Mode:</Text>
          <Switch
            trackColor={{ false: "#777777", true: "#81b0ff" }}
            thumbColor="#ffffff"
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={styles.switch}
          /> */}
        </View>
        <TouchableOpacity onPress={clearData} style={styles.Button}>
          <Text style={styles.ButtonTxt}>Clear Data</Text>
        </TouchableOpacity>
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
  ButtonTxt: {
    fontSize: 30,
    fontWeight: "800",
    color: "darkred",
    textAlign: "center",
    fontFamily: "Verdana",
    marginHorizontal: 3
  },
  Button: {
    paddingVertical: 6,
    flexDirection: "row",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "darkred",
    backgroundColor: "#FF9966",
    alignSelf: "center"
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