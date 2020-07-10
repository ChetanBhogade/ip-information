import React from "react";
import { TextInput, Button } from "react-native-paper";
import { View, StyleSheet } from "react-native";

function InputSection(props) {
  const [text, setText] = React.useState("");

  return (
    <View style={styles.main}>
      <TextInput
        label="Enter Your IP Address"
        keyboardType="number-pad"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={() => {
            props.submitIP(text);
          }}
        >
          Get Info
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 5,
  },
  buttonContainer: {
    marginVertical: 10,
  },
});

export default InputSection;
