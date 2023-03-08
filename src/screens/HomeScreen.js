// Home screen of the app, shows a summery of the day's task and the user can scroll down to see a more detailed view of the day's tasks in a calendar.
// Perhaps when the user scrolls down it moves to the #TodayTask.js screen

import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class HomeScreen extends React.Component {
  render() {
    return(
      <View style={styles.main}>
        <Text>Home Screen</Text>
      </View>
  )}
}

const styles = StyleSheet.create({
  main:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})