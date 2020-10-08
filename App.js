import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    //부모
    <View style={styles.container}>
      <View style={styles.blackView}></View>
      <View style={styles.whiteView}></View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  blackView: {
    flex: 1,
    backgroundColor: "black",
  },
  whiteView: {
    backgroundColor: "white",
    flex: 1,
  },
});
