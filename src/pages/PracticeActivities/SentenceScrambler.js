import { useState } from "react";

import { View, Text, TextInput } from "react-native";

const config1 = ["B.C.", "St.", "U.S.", "U.S.A.", "Dr. ", "Mr.", "Mrs.", "Ms."];
const config2 = [".", "!", "?", '."', ".'", '!"', '?"'];

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
      <Text>Sentence Scrambler</Text>
      <TextInput
        placeholder="Enter Sentences here!"
        editable
        numberOfLines={4}
        onSubmitEditing={(text) => setValue(text.nativeEvent.text)}
      />
      <TextInput
        multiline
        editable
        numberOfLines={4}
        placeholder="Output here"
        value={final}
      />
    </View>
  );
};

export default SentenceScrambler;
