// Option to import from google calendar or apple calendar

import React from "react";
import {View, Text, StyleSheet} from "react-native";
// import {Calendar} from "react-native-calendars";

export default class CalendarScreen extends React.Component {
  render(){
    return(
      <View style={styles.container}>
      <Text>Calendar</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})