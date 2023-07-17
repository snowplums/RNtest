import react from "react";

import { View, Text, TextInput, StyleSheet } from "react-native";

const SentenceScrambler = () => {
  const [value, setValue] = useState("");
  //console.log(value);
  function periodCheck(word) {
    for (var c in config1) {
      if (word.includes(config1[c])) {
        //console.log("true");
        return true;
      }
    }
    //console.log("false");
    return false;
  }

  function sentenceCheck(word) {
    for (var c in config2) {
      if (word.includes(config2[c])) {
        //console.log("true");
        return true;
      }
    }
    return false;
  }

  function shuffleArray(array) {
    let curId = array.length;
    // There remain elements to shuffle
    while (0 !== curId) {
      // Pick a remaining element
      let randId = Math.floor(Math.random() * curId);
      curId -= 1;
      // Swap it with the current element.
      let tmp = array[curId];
      array[curId] = array[randId];
      array[randId] = tmp;
    }
    return array;
  }

  var str = value;
  str = str.replace("\n", " ") + " ";
  var lyst = [];
  var word = "";
  //var num = 1;
  var final = "";

  for (let i = 0; i < str.length; ++i) {
    if (str[i] == " ") {
      lyst.push(word);

      if (sentenceCheck(word) && !periodCheck(word)) {
        //  console.log(word);

        lyst = shuffleArray(lyst);
        //final += num + ". ";
        //++num;
        for (let j = 0; j < lyst.length; ++j) {
          lyst[j] = lyst[j].replace("+", " ");
        }

        for (let j = 0; j < lyst.length - 1; ++j) {
          final += lyst[j] + " / ";
        }
        final += lyst[lyst.length - 1] + "\n\n";
        lyst = [];
      }

      word = "";
    } else {
      word += str[i];
    }
  }

  return (
    /*
    <View>
      <Text>Word Scrambler</Text>
      <TextInput
        editable
        placeholder="Enter Sentences here!"
        onSubmitEditing={(text) => setVal(text.nativeEvent.text)}
        value={value}
      />

      <TextInput
        multiline
        editable
        numberOfLines={4}
        placeholder="Output here"
        value={value}
      />
    </View>
    */
    <View>
      <View style={{ justifyContent: "center", height: "100%" }}>
        <View
          style={{
            position: "absolute",
            height: 900,
            width: 900,
            backgroundColor: "#EEEE77",
            alignSelf: "center",
            borderRadius: 450,
          }}
        ></View>
        <View
          style={{
            position: "absolute",
            height: 600,
            width: 600,
            backgroundColor: "#EEEE95",
            alignSelf: "center",
            borderRadius: 300,
          }}
        ></View>
        <View
          style={{
            position: "absolute",
            height: 300,
            width: 300,
            backgroundColor: "#EEEE77",
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
        <Text style={styles.Title}>Sentence Scrambler</Text>
        <TextInput
          placeholder="Enter Sentences here!"
          editable
          numberOfLines={4}
          onSubmitEditing={(text) => setValue(text.nativeEvent.text)}
          style={styles.Box}
        />
        <TextInput
          multiline
          editable
          numberOfLines={4}
          placeholder="Output here"
          value={final}
          style={styles.Box}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Title: {
    fontSize: 60,
    fontWeight: "800",
    color: "darkorange",
    textAlign: "center",
    marginTop: "5%"
  },
  Box: {
    marginHorizontal: "5%",
    marginTop: "15%",
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 5,
    borderColor: "red",
    backgroundColor: "#FEFEFE",
    borderRadius: 15
  }
})
export default SentenceScrambler;