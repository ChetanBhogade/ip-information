import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from "react-native";
import MyAppBar from "./components/MyAppBar";
import InputSection from "./components/InputSection";
import OutputSection from "./components/OutputSection";

export default function App() {
  const [ipAddr, setIpAddr] = useState();

  const handleInput = (ip) => {
    setIpAddr(ip);
  };

  return (
    <View style={styles.mainScreen}>
      <MyAppBar />
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.contentScreen}>
          <InputSection submitIP={handleInput} />
          <OutputSection ip={ipAddr} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  mainScreen: {
    // flex: 1,
  },
  contentScreen: {
    margin: 15,
    justifyContent: "center",
  },
});
